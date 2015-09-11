declare module 'angular2/src/core/facade/browser' {

  var document: Document;
  var location: Location;
  var window: Window;

}


declare module 'angular2/src/core/facade/lang' {

  class Json {
    static parse(s: string): any;
    static stringify(data: Object): string;
  }

  function CONST(): ClassDecorator;
  function isPresent(obj: any): boolean;
  function isBlank(obj: any): boolean;
  function isString(obj: any): boolean;
  function isFunction(obj: any): boolean;
  function isType(obj: any): boolean;
  function isStringMap(obj: any): boolean;
  function isPromise(obj: any): boolean;
  function isArray(obj: any): boolean;
  function isNumber(obj: any): boolean;
  function isDate(obj: any): boolean;

}
