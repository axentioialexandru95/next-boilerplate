import { GeneratorConfig } from 'index';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NodePlopAPI } from 'node-plop';

declare const atomicComponent: (
  config: Partial<GeneratorConfig>,
  plop: NodePlopAPI
) => {
  description: string;
  prompts: (
    | {

      type: string;
      name: string;
      message: string;
      choices: string[];

    }
    | {

      type: string;
      name: string;
      message: string;
      choices?: undefined;

    }
  )[];
  actions: {
    type: string;
    path: string;
    templateFile: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    data: {};
  }[];

};
export default atomicComponent;
