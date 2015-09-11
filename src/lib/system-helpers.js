/**
 * Typescript compiler: when `module` is set to `system`, the compiler
 * inserts global helpers outside of the System.register function
 *
 * @see https://github.com/systemjs/systemjs/issues/595
 * @see https://github.com/systemjs/builder/issues/178
 * @see https://github.com/Microsoft/TypeScript/issues/3364
 *
 * As a temporary workaround, in tsconfig.json:
 *
 * {"compilerOptions": {"noEmitHelpers": true}}
 *
 * Then manually include this file in a <script> tag.
 *
 */
(function(win){
  win.__decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      return Reflect.decorate(decorators, target, key, desc);
    }

    switch (arguments.length) {
      case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
      case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
      case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
  };

  win.__extends = (this && this.__extends) || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }

    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };

  win.__metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
      return Reflect.metadata(k, v);
    }
  };
}(window));

