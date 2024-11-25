import { BaseClass, CodeGenerator, FileStructures, Interface, Mod, Surrounding } from 'pont-engine';
import { reviseModName } from 'pont-engine/lib/utils';

export class MyFileStructures extends FileStructures {}

export default class MyGenerator extends CodeGenerator {
  /** 获取所有基类的类型定义代码，一个 namespace */
  getBaseClassesInDeclaration() {
    const content = `export namespace ${this.dataSource.name || 'defs'} {
      ${this.dataSource.baseClasses
        .map(
          (base) => `
        export ${this.getBaseClassInDeclaration(base)}
      `,
        )
        .join('\n')}
    }
    `;
    return content;
  }

  /** 获取某个基类的类型定义代码 */
  getBaseClassInDeclaration(base: BaseClass) {
    return `interface ${base.name} ${
      base.name === 'IPage' || base.name === 'R' || base.name === 'PageParams' ? '<T0>' : ''
    } {
      ${base.properties
        .map((prop) => {
          // 替换 defs. 不使用 defs 命名空间
          let propertyCode = prop
            .toPropertyCode(Surrounding.typeScript, true)
            .replaceAll('defs.', '');

          // 如果属性是范型参考，则属性为必选
          // 例如 data?: T0 , creditCustomerConsumptionDailyVo?: CreditManagerV2.AggregateAllTransactionDetailsWithinDimensions[]
          if (base.name === 'IPage' || base.name === 'R' || base.name === 'PageParams') {
            propertyCode = propertyCode
              .replace(/\?/, '')
              .replace(/content:/, 'content?:')
              .replace(/payload:/, 'payload?:');
          }
          return propertyCode;
        })
        .join('\n')}
    }
    `;
  }

  /** 获取总的类型定义代码 api.d.ts 最外层declare namespace defs */
  getDeclaration() {
    return `
      // @ts-nocheck auto generated apis
      ${this.getCommonDeclaration()}

      export ${this.getBaseClassesInDeclaration()}

      export ${this.getModsDeclaration()}
    `;
  }

  /** 获取接口类和基类的总的 index 入口文件代码 */
  getIndex(): string {
    let conclusion = `
      export * from './mods/';
    `;

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
      export { ${this.dataSource.name} as defs } from './baseClass';

      export * as ${this.dataSource.name} from "./mods/";
      `;
    }

    return conclusion;
  }

  // 接口内容定义
  getInterfaceContent(inter: Interface) {
    const paramsCode = inter.getParamsCode(); // params参数
    const bodyParamsCode = inter.getBodyParamsCode(); // body参数
    const reg = /\{(.+?)\}/g;
    // 类型声明
    const paramsTypes = bodyParamsCode
      ? `export type RequestTypes = ${bodyParamsCode}`
      : `${paramsCode} \n export type RequestTypes = Params`;
    const requestParams = bodyParamsCode ? 'bodyParams: RequestTypes' : 'params: RequestTypes'; // 接口入参
    const requestConfig = 'config?: AxiosRequestConfig';
    const content = `
    /* eslint-disable perfectionist/sort-imports */
    // @ts-nocheck auto generated apis

    /**
    * @description ${inter.description}
    */
    
    import type { AxiosRequestConfig } from '@vben/request';
    import type { defs } from '../../api';
    import { requestClient } from '#/api/request';
    
    ${paramsTypes}
    export type ResponseTypes = ${inter.responseType}
    const ${inter.name} = async (${requestParams}, ${requestConfig}) => {
      return requestClient.${inter.method}<ResponseTypes>(
        '${inter.path.replaceAll(reg, '')}'${reg.test(inter.path) ? '+ params' : ''},
        ${bodyParamsCode ? 'bodyParams' : 'params'},
        config,
      );
    };
    export default ${inter.name};
    `;
    return content;
  }

  /** 覆盖/mods/${service}/index文件 */
  getModIndex(mod: Mod) {
    return `
      /**
       * @description ${mod.description}
       */
      ${mod.interfaces
        .map((inter) => {
          return `import ${inter.name} from './${inter.name}'`;
        })
        .join('\n')}

      export {
        ${mod.interfaces.map((inter) => inter.name).join(', \n')}
      }
    `;
  }

  /** 入口index */
  getModsIndex() {
    let conclusion = `
      ${this.surrounding === Surrounding.typeScript ? '(window as any)' : 'window'}.API = {
        ${this.dataSource.mods.map((mod) => reviseModName(mod.name)).join(', \n')}
      };
    `;

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
        export {
          ${this.dataSource.mods.map((mod) => reviseModName(mod.name)).join(', \n')}
        };
      `;
    }

    return `
      ${this.dataSource.mods
        .map((mod) => {
          const modName = reviseModName(mod.name);
          return `import * as ${modName} from './${modName}';`;
        })
        .join('\n')}

      ${conclusion}
    `;
  }
}
