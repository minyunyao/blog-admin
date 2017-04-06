/* SystemJS module definition */
declare var module: NodeModule;
declare var require: NodeRequire;
declare var L: any;
declare var JQuery: any;
declare var jQuery: any;
declare var $: any;
interface NodeModule{
    id:string
}
interface NodeRequire {
    (id: string): any;
}