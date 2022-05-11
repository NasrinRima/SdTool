var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/dropzone/dist/dropzone.js
var require_dropzone = __commonJS({
  "node_modules/dropzone/dist/dropzone.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else {
        var a = factory();
        for (var i in a)
          (typeof exports === "object" ? exports : root)[i] = a[i];
      }
    })(self, function() {
      return function() {
        var __webpack_modules__ = {
          3099: function(module2) {
            module2.exports = function(it) {
              if (typeof it != "function") {
                throw TypeError(String(it) + " is not a function");
              }
              return it;
            };
          },
          6077: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var isObject = __webpack_require__2(111);
            module2.exports = function(it) {
              if (!isObject(it) && it !== null) {
                throw TypeError("Can't set " + String(it) + " as a prototype");
              }
              return it;
            };
          },
          1223: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var wellKnownSymbol = __webpack_require__2(5112);
            var create = __webpack_require__2(30);
            var definePropertyModule = __webpack_require__2(3070);
            var UNSCOPABLES = wellKnownSymbol("unscopables");
            var ArrayPrototype = Array.prototype;
            if (ArrayPrototype[UNSCOPABLES] == void 0) {
              definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
                configurable: true,
                value: create(null)
              });
            }
            module2.exports = function(key) {
              ArrayPrototype[UNSCOPABLES][key] = true;
            };
          },
          1530: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var charAt = __webpack_require__2(8710).charAt;
            module2.exports = function(S, index2, unicode) {
              return index2 + (unicode ? charAt(S, index2).length : 1);
            };
          },
          5787: function(module2) {
            module2.exports = function(it, Constructor, name) {
              if (!(it instanceof Constructor)) {
                throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
              }
              return it;
            };
          },
          9670: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var isObject = __webpack_require__2(111);
            module2.exports = function(it) {
              if (!isObject(it)) {
                throw TypeError(String(it) + " is not an object");
              }
              return it;
            };
          },
          4019: function(module2) {
            module2.exports = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined";
          },
          260: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var NATIVE_ARRAY_BUFFER = __webpack_require__2(4019);
            var DESCRIPTORS = __webpack_require__2(9781);
            var global = __webpack_require__2(7854);
            var isObject = __webpack_require__2(111);
            var has = __webpack_require__2(6656);
            var classof = __webpack_require__2(648);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var redefine = __webpack_require__2(1320);
            var defineProperty = __webpack_require__2(3070).f;
            var getPrototypeOf = __webpack_require__2(9518);
            var setPrototypeOf = __webpack_require__2(7674);
            var wellKnownSymbol = __webpack_require__2(5112);
            var uid = __webpack_require__2(9711);
            var Int8Array2 = global.Int8Array;
            var Int8ArrayPrototype = Int8Array2 && Int8Array2.prototype;
            var Uint8ClampedArray = global.Uint8ClampedArray;
            var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
            var TypedArray = Int8Array2 && getPrototypeOf(Int8Array2);
            var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
            var ObjectPrototype = Object.prototype;
            var isPrototypeOf = ObjectPrototype.isPrototypeOf;
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG");
            var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== "Opera";
            var TYPED_ARRAY_TAG_REQIRED = false;
            var NAME;
            var TypedArrayConstructorsList = {
              Int8Array: 1,
              Uint8Array: 1,
              Uint8ClampedArray: 1,
              Int16Array: 2,
              Uint16Array: 2,
              Int32Array: 4,
              Uint32Array: 4,
              Float32Array: 4,
              Float64Array: 8
            };
            var BigIntArrayConstructorsList = {
              BigInt64Array: 8,
              BigUint64Array: 8
            };
            var isView = function isView2(it) {
              if (!isObject(it))
                return false;
              var klass = classof(it);
              return klass === "DataView" || has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
            };
            var isTypedArray = function(it) {
              if (!isObject(it))
                return false;
              var klass = classof(it);
              return has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
            };
            var aTypedArray = function(it) {
              if (isTypedArray(it))
                return it;
              throw TypeError("Target is not a typed array");
            };
            var aTypedArrayConstructor = function(C) {
              if (setPrototypeOf) {
                if (isPrototypeOf.call(TypedArray, C))
                  return C;
              } else
                for (var ARRAY in TypedArrayConstructorsList)
                  if (has(TypedArrayConstructorsList, NAME)) {
                    var TypedArrayConstructor = global[ARRAY];
                    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
                      return C;
                    }
                  }
              throw TypeError("Target is not a typed array constructor");
            };
            var exportTypedArrayMethod = function(KEY, property, forced) {
              if (!DESCRIPTORS)
                return;
              if (forced)
                for (var ARRAY in TypedArrayConstructorsList) {
                  var TypedArrayConstructor = global[ARRAY];
                  if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
                    delete TypedArrayConstructor.prototype[KEY];
                  }
                }
              if (!TypedArrayPrototype[KEY] || forced) {
                redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
              }
            };
            var exportTypedArrayStaticMethod = function(KEY, property, forced) {
              var ARRAY, TypedArrayConstructor;
              if (!DESCRIPTORS)
                return;
              if (setPrototypeOf) {
                if (forced)
                  for (ARRAY in TypedArrayConstructorsList) {
                    TypedArrayConstructor = global[ARRAY];
                    if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
                      delete TypedArrayConstructor[KEY];
                    }
                  }
                if (!TypedArray[KEY] || forced) {
                  try {
                    return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array2[KEY] || property);
                  } catch (error2) {
                  }
                } else
                  return;
              }
              for (ARRAY in TypedArrayConstructorsList) {
                TypedArrayConstructor = global[ARRAY];
                if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
                  redefine(TypedArrayConstructor, KEY, property);
                }
              }
            };
            for (NAME in TypedArrayConstructorsList) {
              if (!global[NAME])
                NATIVE_ARRAY_BUFFER_VIEWS = false;
            }
            if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != "function" || TypedArray === Function.prototype) {
              TypedArray = function TypedArray2() {
                throw TypeError("Incorrect invocation");
              };
              if (NATIVE_ARRAY_BUFFER_VIEWS)
                for (NAME in TypedArrayConstructorsList) {
                  if (global[NAME])
                    setPrototypeOf(global[NAME], TypedArray);
                }
            }
            if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
              TypedArrayPrototype = TypedArray.prototype;
              if (NATIVE_ARRAY_BUFFER_VIEWS)
                for (NAME in TypedArrayConstructorsList) {
                  if (global[NAME])
                    setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
                }
            }
            if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
              setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
            }
            if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
              TYPED_ARRAY_TAG_REQIRED = true;
              defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function() {
                return isObject(this) ? this[TYPED_ARRAY_TAG] : void 0;
              } });
              for (NAME in TypedArrayConstructorsList)
                if (global[NAME]) {
                  createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
                }
            }
            module2.exports = {
              NATIVE_ARRAY_BUFFER_VIEWS,
              TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
              aTypedArray,
              aTypedArrayConstructor,
              exportTypedArrayMethod,
              exportTypedArrayStaticMethod,
              isView,
              isTypedArray,
              TypedArray,
              TypedArrayPrototype
            };
          },
          3331: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var global = __webpack_require__2(7854);
            var DESCRIPTORS = __webpack_require__2(9781);
            var NATIVE_ARRAY_BUFFER = __webpack_require__2(4019);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var redefineAll = __webpack_require__2(2248);
            var fails = __webpack_require__2(7293);
            var anInstance = __webpack_require__2(5787);
            var toInteger = __webpack_require__2(9958);
            var toLength = __webpack_require__2(7466);
            var toIndex = __webpack_require__2(7067);
            var IEEE754 = __webpack_require__2(1179);
            var getPrototypeOf = __webpack_require__2(9518);
            var setPrototypeOf = __webpack_require__2(7674);
            var getOwnPropertyNames = __webpack_require__2(8006).f;
            var defineProperty = __webpack_require__2(3070).f;
            var arrayFill = __webpack_require__2(1285);
            var setToStringTag = __webpack_require__2(8003);
            var InternalStateModule = __webpack_require__2(9909);
            var getInternalState = InternalStateModule.get;
            var setInternalState = InternalStateModule.set;
            var ARRAY_BUFFER = "ArrayBuffer";
            var DATA_VIEW = "DataView";
            var PROTOTYPE = "prototype";
            var WRONG_LENGTH = "Wrong length";
            var WRONG_INDEX = "Wrong index";
            var NativeArrayBuffer = global[ARRAY_BUFFER];
            var $ArrayBuffer = NativeArrayBuffer;
            var $DataView = global[DATA_VIEW];
            var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
            var ObjectPrototype = Object.prototype;
            var RangeError2 = global.RangeError;
            var packIEEE754 = IEEE754.pack;
            var unpackIEEE754 = IEEE754.unpack;
            var packInt8 = function(number) {
              return [number & 255];
            };
            var packInt16 = function(number) {
              return [number & 255, number >> 8 & 255];
            };
            var packInt32 = function(number) {
              return [number & 255, number >> 8 & 255, number >> 16 & 255, number >> 24 & 255];
            };
            var unpackInt32 = function(buffer) {
              return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
            };
            var packFloat32 = function(number) {
              return packIEEE754(number, 23, 4);
            };
            var packFloat64 = function(number) {
              return packIEEE754(number, 52, 8);
            };
            var addGetter = function(Constructor, key2) {
              defineProperty(Constructor[PROTOTYPE], key2, { get: function() {
                return getInternalState(this)[key2];
              } });
            };
            var get2 = function(view, count, index2, isLittleEndian) {
              var intIndex = toIndex(index2);
              var store = getInternalState(view);
              if (intIndex + count > store.byteLength)
                throw RangeError2(WRONG_INDEX);
              var bytes = getInternalState(store.buffer).bytes;
              var start = intIndex + store.byteOffset;
              var pack = bytes.slice(start, start + count);
              return isLittleEndian ? pack : pack.reverse();
            };
            var set = function(view, count, index2, conversion, value, isLittleEndian) {
              var intIndex = toIndex(index2);
              var store = getInternalState(view);
              if (intIndex + count > store.byteLength)
                throw RangeError2(WRONG_INDEX);
              var bytes = getInternalState(store.buffer).bytes;
              var start = intIndex + store.byteOffset;
              var pack = conversion(+value);
              for (var i = 0; i < count; i++)
                bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
            };
            if (!NATIVE_ARRAY_BUFFER) {
              $ArrayBuffer = function ArrayBuffer2(length) {
                anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
                var byteLength = toIndex(length);
                setInternalState(this, {
                  bytes: arrayFill.call(new Array(byteLength), 0),
                  byteLength
                });
                if (!DESCRIPTORS)
                  this.byteLength = byteLength;
              };
              $DataView = function DataView2(buffer, byteOffset, byteLength) {
                anInstance(this, $DataView, DATA_VIEW);
                anInstance(buffer, $ArrayBuffer, DATA_VIEW);
                var bufferLength = getInternalState(buffer).byteLength;
                var offset = toInteger(byteOffset);
                if (offset < 0 || offset > bufferLength)
                  throw RangeError2("Wrong offset");
                byteLength = byteLength === void 0 ? bufferLength - offset : toLength(byteLength);
                if (offset + byteLength > bufferLength)
                  throw RangeError2(WRONG_LENGTH);
                setInternalState(this, {
                  buffer,
                  byteLength,
                  byteOffset: offset
                });
                if (!DESCRIPTORS) {
                  this.buffer = buffer;
                  this.byteLength = byteLength;
                  this.byteOffset = offset;
                }
              };
              if (DESCRIPTORS) {
                addGetter($ArrayBuffer, "byteLength");
                addGetter($DataView, "buffer");
                addGetter($DataView, "byteLength");
                addGetter($DataView, "byteOffset");
              }
              redefineAll($DataView[PROTOTYPE], {
                getInt8: function getInt8(byteOffset) {
                  return get2(this, 1, byteOffset)[0] << 24 >> 24;
                },
                getUint8: function getUint8(byteOffset) {
                  return get2(this, 1, byteOffset)[0];
                },
                getInt16: function getInt16(byteOffset) {
                  var bytes = get2(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : void 0);
                  return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
                },
                getUint16: function getUint16(byteOffset) {
                  var bytes = get2(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : void 0);
                  return bytes[1] << 8 | bytes[0];
                },
                getInt32: function getInt32(byteOffset) {
                  return unpackInt32(get2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : void 0));
                },
                getUint32: function getUint32(byteOffset) {
                  return unpackInt32(get2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
                },
                getFloat32: function getFloat32(byteOffset) {
                  return unpackIEEE754(get2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : void 0), 23);
                },
                getFloat64: function getFloat64(byteOffset) {
                  return unpackIEEE754(get2(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : void 0), 52);
                },
                setInt8: function setInt8(byteOffset, value) {
                  set(this, 1, byteOffset, packInt8, value);
                },
                setUint8: function setUint8(byteOffset, value) {
                  set(this, 1, byteOffset, packInt8, value);
                },
                setInt16: function setInt16(byteOffset, value) {
                  set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : void 0);
                },
                setUint16: function setUint16(byteOffset, value) {
                  set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : void 0);
                },
                setInt32: function setInt32(byteOffset, value) {
                  set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : void 0);
                },
                setUint32: function setUint32(byteOffset, value) {
                  set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : void 0);
                },
                setFloat32: function setFloat32(byteOffset, value) {
                  set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : void 0);
                },
                setFloat64: function setFloat64(byteOffset, value) {
                  set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : void 0);
                }
              });
            } else {
              if (!fails(function() {
                NativeArrayBuffer(1);
              }) || !fails(function() {
                new NativeArrayBuffer(-1);
              }) || fails(function() {
                new NativeArrayBuffer();
                new NativeArrayBuffer(1.5);
                new NativeArrayBuffer(NaN);
                return NativeArrayBuffer.name != ARRAY_BUFFER;
              })) {
                $ArrayBuffer = function ArrayBuffer2(length) {
                  anInstance(this, $ArrayBuffer);
                  return new NativeArrayBuffer(toIndex(length));
                };
                var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
                for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j; ) {
                  if (!((key = keys[j++]) in $ArrayBuffer)) {
                    createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
                  }
                }
                ArrayBufferPrototype.constructor = $ArrayBuffer;
              }
              if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
                setPrototypeOf($DataViewPrototype, ObjectPrototype);
              }
              var testView = new $DataView(new $ArrayBuffer(2));
              var nativeSetInt8 = $DataViewPrototype.setInt8;
              testView.setInt8(0, 2147483648);
              testView.setInt8(1, 2147483649);
              if (testView.getInt8(0) || !testView.getInt8(1))
                redefineAll($DataViewPrototype, {
                  setInt8: function setInt8(byteOffset, value) {
                    nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
                  },
                  setUint8: function setUint8(byteOffset, value) {
                    nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
                  }
                }, { unsafe: true });
            }
            setToStringTag($ArrayBuffer, ARRAY_BUFFER);
            setToStringTag($DataView, DATA_VIEW);
            module2.exports = {
              ArrayBuffer: $ArrayBuffer,
              DataView: $DataView
            };
          },
          1048: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var toObject = __webpack_require__2(7908);
            var toAbsoluteIndex = __webpack_require__2(1400);
            var toLength = __webpack_require__2(7466);
            var min = Math.min;
            module2.exports = [].copyWithin || function copyWithin(target, start) {
              var O = toObject(this);
              var len = toLength(O.length);
              var to = toAbsoluteIndex(target, len);
              var from = toAbsoluteIndex(start, len);
              var end = arguments.length > 2 ? arguments[2] : void 0;
              var count = min((end === void 0 ? len : toAbsoluteIndex(end, len)) - from, len - to);
              var inc = 1;
              if (from < to && to < from + count) {
                inc = -1;
                from += count - 1;
                to += count - 1;
              }
              while (count-- > 0) {
                if (from in O)
                  O[to] = O[from];
                else
                  delete O[to];
                to += inc;
                from += inc;
              }
              return O;
            };
          },
          1285: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var toObject = __webpack_require__2(7908);
            var toAbsoluteIndex = __webpack_require__2(1400);
            var toLength = __webpack_require__2(7466);
            module2.exports = function fill(value) {
              var O = toObject(this);
              var length = toLength(O.length);
              var argumentsLength = arguments.length;
              var index2 = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : void 0, length);
              var end = argumentsLength > 2 ? arguments[2] : void 0;
              var endPos = end === void 0 ? length : toAbsoluteIndex(end, length);
              while (endPos > index2)
                O[index2++] = value;
              return O;
            };
          },
          8533: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $forEach = __webpack_require__2(2092).forEach;
            var arrayMethodIsStrict = __webpack_require__2(9341);
            var STRICT_METHOD = arrayMethodIsStrict("forEach");
            module2.exports = !STRICT_METHOD ? function forEach2(callbackfn) {
              return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
            } : [].forEach;
          },
          8457: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var bind = __webpack_require__2(9974);
            var toObject = __webpack_require__2(7908);
            var callWithSafeIterationClosing = __webpack_require__2(3411);
            var isArrayIteratorMethod = __webpack_require__2(7659);
            var toLength = __webpack_require__2(7466);
            var createProperty = __webpack_require__2(6135);
            var getIteratorMethod = __webpack_require__2(1246);
            module2.exports = function from(arrayLike) {
              var O = toObject(arrayLike);
              var C = typeof this == "function" ? this : Array;
              var argumentsLength = arguments.length;
              var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
              var mapping = mapfn !== void 0;
              var iteratorMethod = getIteratorMethod(O);
              var index2 = 0;
              var length, result, step, iterator, next, value;
              if (mapping)
                mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2);
              if (iteratorMethod != void 0 && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
                iterator = iteratorMethod.call(O);
                next = iterator.next;
                result = new C();
                for (; !(step = next.call(iterator)).done; index2++) {
                  value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index2], true) : step.value;
                  createProperty(result, index2, value);
                }
              } else {
                length = toLength(O.length);
                result = new C(length);
                for (; length > index2; index2++) {
                  value = mapping ? mapfn(O[index2], index2) : O[index2];
                  createProperty(result, index2, value);
                }
              }
              result.length = index2;
              return result;
            };
          },
          1318: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toIndexedObject = __webpack_require__2(5656);
            var toLength = __webpack_require__2(7466);
            var toAbsoluteIndex = __webpack_require__2(1400);
            var createMethod = function(IS_INCLUDES) {
              return function($this, el, fromIndex) {
                var O = toIndexedObject($this);
                var length = toLength(O.length);
                var index2 = toAbsoluteIndex(fromIndex, length);
                var value;
                if (IS_INCLUDES && el != el)
                  while (length > index2) {
                    value = O[index2++];
                    if (value != value)
                      return true;
                  }
                else
                  for (; length > index2; index2++) {
                    if ((IS_INCLUDES || index2 in O) && O[index2] === el)
                      return IS_INCLUDES || index2 || 0;
                  }
                return !IS_INCLUDES && -1;
              };
            };
            module2.exports = {
              includes: createMethod(true),
              indexOf: createMethod(false)
            };
          },
          2092: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var bind = __webpack_require__2(9974);
            var IndexedObject = __webpack_require__2(8361);
            var toObject = __webpack_require__2(7908);
            var toLength = __webpack_require__2(7466);
            var arraySpeciesCreate = __webpack_require__2(5417);
            var push = [].push;
            var createMethod = function(TYPE) {
              var IS_MAP = TYPE == 1;
              var IS_FILTER = TYPE == 2;
              var IS_SOME = TYPE == 3;
              var IS_EVERY = TYPE == 4;
              var IS_FIND_INDEX = TYPE == 6;
              var IS_FILTER_OUT = TYPE == 7;
              var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
              return function($this, callbackfn, that, specificCreate) {
                var O = toObject($this);
                var self2 = IndexedObject(O);
                var boundFunction = bind(callbackfn, that, 3);
                var length = toLength(self2.length);
                var index2 = 0;
                var create = specificCreate || arraySpeciesCreate;
                var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : void 0;
                var value, result;
                for (; length > index2; index2++)
                  if (NO_HOLES || index2 in self2) {
                    value = self2[index2];
                    result = boundFunction(value, index2, O);
                    if (TYPE) {
                      if (IS_MAP)
                        target[index2] = result;
                      else if (result)
                        switch (TYPE) {
                          case 3:
                            return true;
                          case 5:
                            return value;
                          case 6:
                            return index2;
                          case 2:
                            push.call(target, value);
                        }
                      else
                        switch (TYPE) {
                          case 4:
                            return false;
                          case 7:
                            push.call(target, value);
                        }
                    }
                  }
                return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
              };
            };
            module2.exports = {
              forEach: createMethod(0),
              map: createMethod(1),
              filter: createMethod(2),
              some: createMethod(3),
              every: createMethod(4),
              find: createMethod(5),
              findIndex: createMethod(6),
              filterOut: createMethod(7)
            };
          },
          6583: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var toIndexedObject = __webpack_require__2(5656);
            var toInteger = __webpack_require__2(9958);
            var toLength = __webpack_require__2(7466);
            var arrayMethodIsStrict = __webpack_require__2(9341);
            var min = Math.min;
            var nativeLastIndexOf = [].lastIndexOf;
            var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
            var STRICT_METHOD = arrayMethodIsStrict("lastIndexOf");
            var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;
            module2.exports = FORCED ? function lastIndexOf(searchElement) {
              if (NEGATIVE_ZERO)
                return nativeLastIndexOf.apply(this, arguments) || 0;
              var O = toIndexedObject(this);
              var length = toLength(O.length);
              var index2 = length - 1;
              if (arguments.length > 1)
                index2 = min(index2, toInteger(arguments[1]));
              if (index2 < 0)
                index2 = length + index2;
              for (; index2 >= 0; index2--)
                if (index2 in O && O[index2] === searchElement)
                  return index2 || 0;
              return -1;
            } : nativeLastIndexOf;
          },
          1194: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            var wellKnownSymbol = __webpack_require__2(5112);
            var V8_VERSION = __webpack_require__2(7392);
            var SPECIES = wellKnownSymbol("species");
            module2.exports = function(METHOD_NAME) {
              return V8_VERSION >= 51 || !fails(function() {
                var array = [];
                var constructor = array.constructor = {};
                constructor[SPECIES] = function() {
                  return { foo: 1 };
                };
                return array[METHOD_NAME](Boolean).foo !== 1;
              });
            };
          },
          9341: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var fails = __webpack_require__2(7293);
            module2.exports = function(METHOD_NAME, argument) {
              var method = [][METHOD_NAME];
              return !!method && fails(function() {
                method.call(null, argument || function() {
                  throw 1;
                }, 1);
              });
            };
          },
          3671: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var aFunction = __webpack_require__2(3099);
            var toObject = __webpack_require__2(7908);
            var IndexedObject = __webpack_require__2(8361);
            var toLength = __webpack_require__2(7466);
            var createMethod = function(IS_RIGHT) {
              return function(that, callbackfn, argumentsLength, memo) {
                aFunction(callbackfn);
                var O = toObject(that);
                var self2 = IndexedObject(O);
                var length = toLength(O.length);
                var index2 = IS_RIGHT ? length - 1 : 0;
                var i = IS_RIGHT ? -1 : 1;
                if (argumentsLength < 2)
                  while (true) {
                    if (index2 in self2) {
                      memo = self2[index2];
                      index2 += i;
                      break;
                    }
                    index2 += i;
                    if (IS_RIGHT ? index2 < 0 : length <= index2) {
                      throw TypeError("Reduce of empty array with no initial value");
                    }
                  }
                for (; IS_RIGHT ? index2 >= 0 : length > index2; index2 += i)
                  if (index2 in self2) {
                    memo = callbackfn(memo, self2[index2], index2, O);
                  }
                return memo;
              };
            };
            module2.exports = {
              left: createMethod(false),
              right: createMethod(true)
            };
          },
          5417: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var isObject = __webpack_require__2(111);
            var isArray = __webpack_require__2(3157);
            var wellKnownSymbol = __webpack_require__2(5112);
            var SPECIES = wellKnownSymbol("species");
            module2.exports = function(originalArray, length) {
              var C;
              if (isArray(originalArray)) {
                C = originalArray.constructor;
                if (typeof C == "function" && (C === Array || isArray(C.prototype)))
                  C = void 0;
                else if (isObject(C)) {
                  C = C[SPECIES];
                  if (C === null)
                    C = void 0;
                }
              }
              return new (C === void 0 ? Array : C)(length === 0 ? 0 : length);
            };
          },
          3411: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var anObject = __webpack_require__2(9670);
            var iteratorClose = __webpack_require__2(9212);
            module2.exports = function(iterator, fn, value, ENTRIES) {
              try {
                return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
              } catch (error2) {
                iteratorClose(iterator);
                throw error2;
              }
            };
          },
          7072: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var wellKnownSymbol = __webpack_require__2(5112);
            var ITERATOR = wellKnownSymbol("iterator");
            var SAFE_CLOSING = false;
            try {
              var called = 0;
              var iteratorWithReturn = {
                next: function() {
                  return { done: !!called++ };
                },
                "return": function() {
                  SAFE_CLOSING = true;
                }
              };
              iteratorWithReturn[ITERATOR] = function() {
                return this;
              };
              Array.from(iteratorWithReturn, function() {
                throw 2;
              });
            } catch (error2) {
            }
            module2.exports = function(exec, SKIP_CLOSING) {
              if (!SKIP_CLOSING && !SAFE_CLOSING)
                return false;
              var ITERATION_SUPPORT = false;
              try {
                var object = {};
                object[ITERATOR] = function() {
                  return {
                    next: function() {
                      return { done: ITERATION_SUPPORT = true };
                    }
                  };
                };
                exec(object);
              } catch (error2) {
              }
              return ITERATION_SUPPORT;
            };
          },
          4326: function(module2) {
            var toString = {}.toString;
            module2.exports = function(it) {
              return toString.call(it).slice(8, -1);
            };
          },
          648: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var TO_STRING_TAG_SUPPORT = __webpack_require__2(1694);
            var classofRaw = __webpack_require__2(4326);
            var wellKnownSymbol = __webpack_require__2(5112);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var CORRECT_ARGUMENTS = classofRaw(function() {
              return arguments;
            }()) == "Arguments";
            var tryGet = function(it, key) {
              try {
                return it[key];
              } catch (error2) {
              }
            };
            module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
              var O, tag, result;
              return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
            };
          },
          9920: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var has = __webpack_require__2(6656);
            var ownKeys2 = __webpack_require__2(3887);
            var getOwnPropertyDescriptorModule = __webpack_require__2(1236);
            var definePropertyModule = __webpack_require__2(3070);
            module2.exports = function(target, source) {
              var keys = ownKeys2(source);
              var defineProperty = definePropertyModule.f;
              var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (!has(target, key))
                  defineProperty(target, key, getOwnPropertyDescriptor(source, key));
              }
            };
          },
          8544: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            module2.exports = !fails(function() {
              function F() {
              }
              F.prototype.constructor = null;
              return Object.getPrototypeOf(new F()) !== F.prototype;
            });
          },
          4994: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var IteratorPrototype = __webpack_require__2(3383).IteratorPrototype;
            var create = __webpack_require__2(30);
            var createPropertyDescriptor = __webpack_require__2(9114);
            var setToStringTag = __webpack_require__2(8003);
            var Iterators = __webpack_require__2(7497);
            var returnThis = function() {
              return this;
            };
            module2.exports = function(IteratorConstructor, NAME, next) {
              var TO_STRING_TAG = NAME + " Iterator";
              IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
              setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
              Iterators[TO_STRING_TAG] = returnThis;
              return IteratorConstructor;
            };
          },
          8880: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var DESCRIPTORS = __webpack_require__2(9781);
            var definePropertyModule = __webpack_require__2(3070);
            var createPropertyDescriptor = __webpack_require__2(9114);
            module2.exports = DESCRIPTORS ? function(object, key, value) {
              return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
            } : function(object, key, value) {
              object[key] = value;
              return object;
            };
          },
          9114: function(module2) {
            module2.exports = function(bitmap, value) {
              return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value
              };
            };
          },
          6135: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var toPrimitive = __webpack_require__2(7593);
            var definePropertyModule = __webpack_require__2(3070);
            var createPropertyDescriptor = __webpack_require__2(9114);
            module2.exports = function(object, key, value) {
              var propertyKey = toPrimitive(key);
              if (propertyKey in object)
                definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
              else
                object[propertyKey] = value;
            };
          },
          654: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $ = __webpack_require__2(2109);
            var createIteratorConstructor = __webpack_require__2(4994);
            var getPrototypeOf = __webpack_require__2(9518);
            var setPrototypeOf = __webpack_require__2(7674);
            var setToStringTag = __webpack_require__2(8003);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var redefine = __webpack_require__2(1320);
            var wellKnownSymbol = __webpack_require__2(5112);
            var IS_PURE = __webpack_require__2(1913);
            var Iterators = __webpack_require__2(7497);
            var IteratorsCore = __webpack_require__2(3383);
            var IteratorPrototype = IteratorsCore.IteratorPrototype;
            var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
            var ITERATOR = wellKnownSymbol("iterator");
            var KEYS = "keys";
            var VALUES = "values";
            var ENTRIES = "entries";
            var returnThis = function() {
              return this;
            };
            module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
              createIteratorConstructor(IteratorConstructor, NAME, next);
              var getIterationMethod = function(KIND) {
                if (KIND === DEFAULT && defaultIterator)
                  return defaultIterator;
                if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
                  return IterablePrototype[KIND];
                switch (KIND) {
                  case KEYS:
                    return function keys() {
                      return new IteratorConstructor(this, KIND);
                    };
                  case VALUES:
                    return function values() {
                      return new IteratorConstructor(this, KIND);
                    };
                  case ENTRIES:
                    return function entries() {
                      return new IteratorConstructor(this, KIND);
                    };
                }
                return function() {
                  return new IteratorConstructor(this);
                };
              };
              var TO_STRING_TAG = NAME + " Iterator";
              var INCORRECT_VALUES_NAME = false;
              var IterablePrototype = Iterable.prototype;
              var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
              var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
              var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
              var CurrentIteratorPrototype, methods, KEY;
              if (anyNativeIterator) {
                CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
                if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                  if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                    if (setPrototypeOf) {
                      setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                    } else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
                      createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                    }
                  }
                  setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                  if (IS_PURE)
                    Iterators[TO_STRING_TAG] = returnThis;
                }
              }
              if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                INCORRECT_VALUES_NAME = true;
                defaultIterator = function values() {
                  return nativeIterator.call(this);
                };
              }
              if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
                createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
              }
              Iterators[NAME] = defaultIterator;
              if (DEFAULT) {
                methods = {
                  values: getIterationMethod(VALUES),
                  keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                  entries: getIterationMethod(ENTRIES)
                };
                if (FORCED)
                  for (KEY in methods) {
                    if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                      redefine(IterablePrototype, KEY, methods[KEY]);
                    }
                  }
                else
                  $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
              }
              return methods;
            };
          },
          9781: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            module2.exports = !fails(function() {
              return Object.defineProperty({}, 1, { get: function() {
                return 7;
              } })[1] != 7;
            });
          },
          317: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var isObject = __webpack_require__2(111);
            var document2 = global.document;
            var EXISTS = isObject(document2) && isObject(document2.createElement);
            module2.exports = function(it) {
              return EXISTS ? document2.createElement(it) : {};
            };
          },
          8324: function(module2) {
            module2.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0
            };
          },
          8113: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var getBuiltIn = __webpack_require__2(5005);
            module2.exports = getBuiltIn("navigator", "userAgent") || "";
          },
          7392: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var userAgent2 = __webpack_require__2(8113);
            var process = global.process;
            var versions = process && process.versions;
            var v8 = versions && versions.v8;
            var match, version2;
            if (v8) {
              match = v8.split(".");
              version2 = match[0] + match[1];
            } else if (userAgent2) {
              match = userAgent2.match(/Edge\/(\d+)/);
              if (!match || match[1] >= 74) {
                match = userAgent2.match(/Chrome\/(\d+)/);
                if (match)
                  version2 = match[1];
              }
            }
            module2.exports = version2 && +version2;
          },
          748: function(module2) {
            module2.exports = [
              "constructor",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "toLocaleString",
              "toString",
              "valueOf"
            ];
          },
          2109: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var getOwnPropertyDescriptor = __webpack_require__2(1236).f;
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var redefine = __webpack_require__2(1320);
            var setGlobal = __webpack_require__2(3505);
            var copyConstructorProperties = __webpack_require__2(9920);
            var isForced = __webpack_require__2(4705);
            module2.exports = function(options2, source) {
              var TARGET = options2.target;
              var GLOBAL = options2.global;
              var STATIC = options2.stat;
              var FORCED, target, key, targetProperty, sourceProperty, descriptor;
              if (GLOBAL) {
                target = global;
              } else if (STATIC) {
                target = global[TARGET] || setGlobal(TARGET, {});
              } else {
                target = (global[TARGET] || {}).prototype;
              }
              if (target)
                for (key in source) {
                  sourceProperty = source[key];
                  if (options2.noTargetGet) {
                    descriptor = getOwnPropertyDescriptor(target, key);
                    targetProperty = descriptor && descriptor.value;
                  } else
                    targetProperty = target[key];
                  FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options2.forced);
                  if (!FORCED && targetProperty !== void 0) {
                    if (typeof sourceProperty === typeof targetProperty)
                      continue;
                    copyConstructorProperties(sourceProperty, targetProperty);
                  }
                  if (options2.sham || targetProperty && targetProperty.sham) {
                    createNonEnumerableProperty(sourceProperty, "sham", true);
                  }
                  redefine(target, key, sourceProperty, options2);
                }
            };
          },
          7293: function(module2) {
            module2.exports = function(exec) {
              try {
                return !!exec();
              } catch (error2) {
                return true;
              }
            };
          },
          7007: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            __webpack_require__2(4916);
            var redefine = __webpack_require__2(1320);
            var fails = __webpack_require__2(7293);
            var wellKnownSymbol = __webpack_require__2(5112);
            var regexpExec = __webpack_require__2(2261);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var SPECIES = wellKnownSymbol("species");
            var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
              var re = /./;
              re.exec = function() {
                var result = [];
                result.groups = { a: "7" };
                return result;
              };
              return "".replace(re, "$<a>") !== "7";
            });
            var REPLACE_KEEPS_$0 = function() {
              return "a".replace(/./, "$0") === "$0";
            }();
            var REPLACE = wellKnownSymbol("replace");
            var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
              if (/./[REPLACE]) {
                return /./[REPLACE]("a", "$0") === "";
              }
              return false;
            }();
            var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
              var re = /(?:)/;
              var originalExec = re.exec;
              re.exec = function() {
                return originalExec.apply(this, arguments);
              };
              var result = "ab".split(re);
              return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
            });
            module2.exports = function(KEY, length, exec, sham) {
              var SYMBOL = wellKnownSymbol(KEY);
              var DELEGATES_TO_SYMBOL = !fails(function() {
                var O = {};
                O[SYMBOL] = function() {
                  return 7;
                };
                return ""[KEY](O) != 7;
              });
              var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
                var execCalled = false;
                var re = /a/;
                if (KEY === "split") {
                  re = {};
                  re.constructor = {};
                  re.constructor[SPECIES] = function() {
                    return re;
                  };
                  re.flags = "";
                  re[SYMBOL] = /./[SYMBOL];
                }
                re.exec = function() {
                  execCalled = true;
                  return null;
                };
                re[SYMBOL]("");
                return !execCalled;
              });
              if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
                var nativeRegExpMethod = /./[SYMBOL];
                var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
                  if (regexp.exec === regexpExec) {
                    if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                      return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
                    }
                    return { done: true, value: nativeMethod.call(str, regexp, arg2) };
                  }
                  return { done: false };
                }, {
                  REPLACE_KEEPS_$0,
                  REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
                });
                var stringMethod = methods[0];
                var regexMethod = methods[1];
                redefine(String.prototype, KEY, stringMethod);
                redefine(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
                  return regexMethod.call(string, this, arg);
                } : function(string) {
                  return regexMethod.call(string, this);
                });
              }
              if (sham)
                createNonEnumerableProperty(RegExp.prototype[SYMBOL], "sham", true);
            };
          },
          9974: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var aFunction = __webpack_require__2(3099);
            module2.exports = function(fn, that, length) {
              aFunction(fn);
              if (that === void 0)
                return fn;
              switch (length) {
                case 0:
                  return function() {
                    return fn.call(that);
                  };
                case 1:
                  return function(a) {
                    return fn.call(that, a);
                  };
                case 2:
                  return function(a, b) {
                    return fn.call(that, a, b);
                  };
                case 3:
                  return function(a, b, c) {
                    return fn.call(that, a, b, c);
                  };
              }
              return function() {
                return fn.apply(that, arguments);
              };
            };
          },
          5005: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var path = __webpack_require__2(857);
            var global = __webpack_require__2(7854);
            var aFunction = function(variable) {
              return typeof variable == "function" ? variable : void 0;
            };
            module2.exports = function(namespace, method) {
              return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
            };
          },
          1246: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var classof = __webpack_require__2(648);
            var Iterators = __webpack_require__2(7497);
            var wellKnownSymbol = __webpack_require__2(5112);
            var ITERATOR = wellKnownSymbol("iterator");
            module2.exports = function(it) {
              if (it != void 0)
                return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
            };
          },
          8554: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var anObject = __webpack_require__2(9670);
            var getIteratorMethod = __webpack_require__2(1246);
            module2.exports = function(it) {
              var iteratorMethod = getIteratorMethod(it);
              if (typeof iteratorMethod != "function") {
                throw TypeError(String(it) + " is not iterable");
              }
              return anObject(iteratorMethod.call(it));
            };
          },
          647: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toObject = __webpack_require__2(7908);
            var floor2 = Math.floor;
            var replace = "".replace;
            var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
            var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;
            module2.exports = function(matched, str, position, captures, namedCaptures, replacement) {
              var tailPos = position + matched.length;
              var m = captures.length;
              var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
              if (namedCaptures !== void 0) {
                namedCaptures = toObject(namedCaptures);
                symbols = SUBSTITUTION_SYMBOLS;
              }
              return replace.call(replacement, symbols, function(match, ch) {
                var capture;
                switch (ch.charAt(0)) {
                  case "$":
                    return "$";
                  case "&":
                    return matched;
                  case "`":
                    return str.slice(0, position);
                  case "'":
                    return str.slice(tailPos);
                  case "<":
                    capture = namedCaptures[ch.slice(1, -1)];
                    break;
                  default:
                    var n = +ch;
                    if (n === 0)
                      return match;
                    if (n > m) {
                      var f = floor2(n / 10);
                      if (f === 0)
                        return match;
                      if (f <= m)
                        return captures[f - 1] === void 0 ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                      return match;
                    }
                    capture = captures[n - 1];
                }
                return capture === void 0 ? "" : capture;
              });
            };
          },
          7854: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var check = function(it) {
              return it && it.Math == Math && it;
            };
            module2.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof __webpack_require__2.g == "object" && __webpack_require__2.g) || function() {
              return this;
            }() || Function("return this")();
          },
          6656: function(module2) {
            var hasOwnProperty = {}.hasOwnProperty;
            module2.exports = function(it, key) {
              return hasOwnProperty.call(it, key);
            };
          },
          3501: function(module2) {
            module2.exports = {};
          },
          490: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var getBuiltIn = __webpack_require__2(5005);
            module2.exports = getBuiltIn("document", "documentElement");
          },
          4664: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var DESCRIPTORS = __webpack_require__2(9781);
            var fails = __webpack_require__2(7293);
            var createElement = __webpack_require__2(317);
            module2.exports = !DESCRIPTORS && !fails(function() {
              return Object.defineProperty(createElement("div"), "a", {
                get: function() {
                  return 7;
                }
              }).a != 7;
            });
          },
          1179: function(module2) {
            var abs = Math.abs;
            var pow = Math.pow;
            var floor2 = Math.floor;
            var log = Math.log;
            var LN2 = Math.LN2;
            var pack = function(number, mantissaLength, bytes) {
              var buffer = new Array(bytes);
              var exponentLength = bytes * 8 - mantissaLength - 1;
              var eMax = (1 << exponentLength) - 1;
              var eBias = eMax >> 1;
              var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
              var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
              var index2 = 0;
              var exponent, mantissa, c;
              number = abs(number);
              if (number != number || number === Infinity) {
                mantissa = number != number ? 1 : 0;
                exponent = eMax;
              } else {
                exponent = floor2(log(number) / LN2);
                if (number * (c = pow(2, -exponent)) < 1) {
                  exponent--;
                  c *= 2;
                }
                if (exponent + eBias >= 1) {
                  number += rt / c;
                } else {
                  number += rt * pow(2, 1 - eBias);
                }
                if (number * c >= 2) {
                  exponent++;
                  c /= 2;
                }
                if (exponent + eBias >= eMax) {
                  mantissa = 0;
                  exponent = eMax;
                } else if (exponent + eBias >= 1) {
                  mantissa = (number * c - 1) * pow(2, mantissaLength);
                  exponent = exponent + eBias;
                } else {
                  mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
                  exponent = 0;
                }
              }
              for (; mantissaLength >= 8; buffer[index2++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8)
                ;
              exponent = exponent << mantissaLength | mantissa;
              exponentLength += mantissaLength;
              for (; exponentLength > 0; buffer[index2++] = exponent & 255, exponent /= 256, exponentLength -= 8)
                ;
              buffer[--index2] |= sign * 128;
              return buffer;
            };
            var unpack = function(buffer, mantissaLength) {
              var bytes = buffer.length;
              var exponentLength = bytes * 8 - mantissaLength - 1;
              var eMax = (1 << exponentLength) - 1;
              var eBias = eMax >> 1;
              var nBits = exponentLength - 7;
              var index2 = bytes - 1;
              var sign = buffer[index2--];
              var exponent = sign & 127;
              var mantissa;
              sign >>= 7;
              for (; nBits > 0; exponent = exponent * 256 + buffer[index2], index2--, nBits -= 8)
                ;
              mantissa = exponent & (1 << -nBits) - 1;
              exponent >>= -nBits;
              nBits += mantissaLength;
              for (; nBits > 0; mantissa = mantissa * 256 + buffer[index2], index2--, nBits -= 8)
                ;
              if (exponent === 0) {
                exponent = 1 - eBias;
              } else if (exponent === eMax) {
                return mantissa ? NaN : sign ? -Infinity : Infinity;
              } else {
                mantissa = mantissa + pow(2, mantissaLength);
                exponent = exponent - eBias;
              }
              return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
            };
            module2.exports = {
              pack,
              unpack
            };
          },
          8361: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            var classof = __webpack_require__2(4326);
            var split = "".split;
            module2.exports = fails(function() {
              return !Object("z").propertyIsEnumerable(0);
            }) ? function(it) {
              return classof(it) == "String" ? split.call(it, "") : Object(it);
            } : Object;
          },
          9587: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var isObject = __webpack_require__2(111);
            var setPrototypeOf = __webpack_require__2(7674);
            module2.exports = function($this, dummy, Wrapper) {
              var NewTarget, NewTargetPrototype;
              if (setPrototypeOf && typeof (NewTarget = dummy.constructor) == "function" && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype)
                setPrototypeOf($this, NewTargetPrototype);
              return $this;
            };
          },
          2788: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var store = __webpack_require__2(5465);
            var functionToString = Function.toString;
            if (typeof store.inspectSource != "function") {
              store.inspectSource = function(it) {
                return functionToString.call(it);
              };
            }
            module2.exports = store.inspectSource;
          },
          9909: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var NATIVE_WEAK_MAP = __webpack_require__2(8536);
            var global = __webpack_require__2(7854);
            var isObject = __webpack_require__2(111);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var objectHas = __webpack_require__2(6656);
            var shared = __webpack_require__2(5465);
            var sharedKey = __webpack_require__2(6200);
            var hiddenKeys = __webpack_require__2(3501);
            var WeakMap2 = global.WeakMap;
            var set, get2, has;
            var enforce = function(it) {
              return has(it) ? get2(it) : set(it, {});
            };
            var getterFor = function(TYPE) {
              return function(it) {
                var state;
                if (!isObject(it) || (state = get2(it)).type !== TYPE) {
                  throw TypeError("Incompatible receiver, " + TYPE + " required");
                }
                return state;
              };
            };
            if (NATIVE_WEAK_MAP) {
              var store = shared.state || (shared.state = new WeakMap2());
              var wmget = store.get;
              var wmhas = store.has;
              var wmset = store.set;
              set = function(it, metadata) {
                metadata.facade = it;
                wmset.call(store, it, metadata);
                return metadata;
              };
              get2 = function(it) {
                return wmget.call(store, it) || {};
              };
              has = function(it) {
                return wmhas.call(store, it);
              };
            } else {
              var STATE = sharedKey("state");
              hiddenKeys[STATE] = true;
              set = function(it, metadata) {
                metadata.facade = it;
                createNonEnumerableProperty(it, STATE, metadata);
                return metadata;
              };
              get2 = function(it) {
                return objectHas(it, STATE) ? it[STATE] : {};
              };
              has = function(it) {
                return objectHas(it, STATE);
              };
            }
            module2.exports = {
              set,
              get: get2,
              has,
              enforce,
              getterFor
            };
          },
          7659: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var wellKnownSymbol = __webpack_require__2(5112);
            var Iterators = __webpack_require__2(7497);
            var ITERATOR = wellKnownSymbol("iterator");
            var ArrayPrototype = Array.prototype;
            module2.exports = function(it) {
              return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
            };
          },
          3157: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var classof = __webpack_require__2(4326);
            module2.exports = Array.isArray || function isArray(arg) {
              return classof(arg) == "Array";
            };
          },
          4705: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            var replacement = /#|\.prototype\./;
            var isForced = function(feature, detection) {
              var value = data[normalize(feature)];
              return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
            };
            var normalize = isForced.normalize = function(string) {
              return String(string).replace(replacement, ".").toLowerCase();
            };
            var data = isForced.data = {};
            var NATIVE = isForced.NATIVE = "N";
            var POLYFILL = isForced.POLYFILL = "P";
            module2.exports = isForced;
          },
          111: function(module2) {
            module2.exports = function(it) {
              return typeof it === "object" ? it !== null : typeof it === "function";
            };
          },
          1913: function(module2) {
            module2.exports = false;
          },
          7850: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var isObject = __webpack_require__2(111);
            var classof = __webpack_require__2(4326);
            var wellKnownSymbol = __webpack_require__2(5112);
            var MATCH = wellKnownSymbol("match");
            module2.exports = function(it) {
              var isRegExp;
              return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) == "RegExp");
            };
          },
          9212: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var anObject = __webpack_require__2(9670);
            module2.exports = function(iterator) {
              var returnMethod = iterator["return"];
              if (returnMethod !== void 0) {
                return anObject(returnMethod.call(iterator)).value;
              }
            };
          },
          3383: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var fails = __webpack_require__2(7293);
            var getPrototypeOf = __webpack_require__2(9518);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var has = __webpack_require__2(6656);
            var wellKnownSymbol = __webpack_require__2(5112);
            var IS_PURE = __webpack_require__2(1913);
            var ITERATOR = wellKnownSymbol("iterator");
            var BUGGY_SAFARI_ITERATORS = false;
            var returnThis = function() {
              return this;
            };
            var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
            if ([].keys) {
              arrayIterator = [].keys();
              if (!("next" in arrayIterator))
                BUGGY_SAFARI_ITERATORS = true;
              else {
                PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
                  IteratorPrototype = PrototypeOfArrayIteratorPrototype;
              }
            }
            var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == void 0 || fails(function() {
              var test = {};
              return IteratorPrototype[ITERATOR].call(test) !== test;
            });
            if (NEW_ITERATOR_PROTOTYPE)
              IteratorPrototype = {};
            if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
              createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
            }
            module2.exports = {
              IteratorPrototype,
              BUGGY_SAFARI_ITERATORS
            };
          },
          7497: function(module2) {
            module2.exports = {};
          },
          133: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
              return !String(Symbol());
            });
          },
          590: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            var wellKnownSymbol = __webpack_require__2(5112);
            var IS_PURE = __webpack_require__2(1913);
            var ITERATOR = wellKnownSymbol("iterator");
            module2.exports = !fails(function() {
              var url = new URL("b?a=1&b=2&c=3", "http://a");
              var searchParams = url.searchParams;
              var result = "";
              url.pathname = "c%20d";
              searchParams.forEach(function(value, key) {
                searchParams["delete"]("b");
                result += key + value;
              });
              return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== "http://a/c%20d?a=1&c=3" || searchParams.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !searchParams[ITERATOR] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://\u0442\u0435\u0441\u0442").host !== "xn--e1aybc" || new URL("http://a#\u0431").hash !== "#%D0%B1" || result !== "a1c3" || new URL("http://x", void 0).host !== "x";
            });
          },
          8536: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var inspectSource = __webpack_require__2(2788);
            var WeakMap2 = global.WeakMap;
            module2.exports = typeof WeakMap2 === "function" && /native code/.test(inspectSource(WeakMap2));
          },
          1574: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var DESCRIPTORS = __webpack_require__2(9781);
            var fails = __webpack_require__2(7293);
            var objectKeys = __webpack_require__2(1956);
            var getOwnPropertySymbolsModule = __webpack_require__2(5181);
            var propertyIsEnumerableModule = __webpack_require__2(5296);
            var toObject = __webpack_require__2(7908);
            var IndexedObject = __webpack_require__2(8361);
            var nativeAssign = Object.assign;
            var defineProperty = Object.defineProperty;
            module2.exports = !nativeAssign || fails(function() {
              if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, "a", {
                enumerable: true,
                get: function() {
                  defineProperty(this, "b", {
                    value: 3,
                    enumerable: false
                  });
                }
              }), { b: 2 })).b !== 1)
                return true;
              var A = {};
              var B = {};
              var symbol = Symbol();
              var alphabet = "abcdefghijklmnopqrst";
              A[symbol] = 7;
              alphabet.split("").forEach(function(chr) {
                B[chr] = chr;
              });
              return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join("") != alphabet;
            }) ? function assign(target, source) {
              var T = toObject(target);
              var argumentsLength = arguments.length;
              var index2 = 1;
              var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
              var propertyIsEnumerable = propertyIsEnumerableModule.f;
              while (argumentsLength > index2) {
                var S = IndexedObject(arguments[index2++]);
                var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
                var length = keys.length;
                var j = 0;
                var key;
                while (length > j) {
                  key = keys[j++];
                  if (!DESCRIPTORS || propertyIsEnumerable.call(S, key))
                    T[key] = S[key];
                }
              }
              return T;
            } : nativeAssign;
          },
          30: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var anObject = __webpack_require__2(9670);
            var defineProperties = __webpack_require__2(6048);
            var enumBugKeys = __webpack_require__2(748);
            var hiddenKeys = __webpack_require__2(3501);
            var html = __webpack_require__2(490);
            var documentCreateElement = __webpack_require__2(317);
            var sharedKey = __webpack_require__2(6200);
            var GT = ">";
            var LT = "<";
            var PROTOTYPE = "prototype";
            var SCRIPT = "script";
            var IE_PROTO = sharedKey("IE_PROTO");
            var EmptyConstructor = function() {
            };
            var scriptTag = function(content) {
              return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
            };
            var NullProtoObjectViaActiveX = function(activeXDocument2) {
              activeXDocument2.write(scriptTag(""));
              activeXDocument2.close();
              var temp = activeXDocument2.parentWindow.Object;
              activeXDocument2 = null;
              return temp;
            };
            var NullProtoObjectViaIFrame = function() {
              var iframe = documentCreateElement("iframe");
              var JS = "java" + SCRIPT + ":";
              var iframeDocument;
              iframe.style.display = "none";
              html.appendChild(iframe);
              iframe.src = String(JS);
              iframeDocument = iframe.contentWindow.document;
              iframeDocument.open();
              iframeDocument.write(scriptTag("document.F=Object"));
              iframeDocument.close();
              return iframeDocument.F;
            };
            var activeXDocument;
            var NullProtoObject = function() {
              try {
                activeXDocument = document.domain && new ActiveXObject("htmlfile");
              } catch (error2) {
              }
              NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
              var length = enumBugKeys.length;
              while (length--)
                delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
              return NullProtoObject();
            };
            hiddenKeys[IE_PROTO] = true;
            module2.exports = Object.create || function create(O, Properties) {
              var result;
              if (O !== null) {
                EmptyConstructor[PROTOTYPE] = anObject(O);
                result = new EmptyConstructor();
                EmptyConstructor[PROTOTYPE] = null;
                result[IE_PROTO] = O;
              } else
                result = NullProtoObject();
              return Properties === void 0 ? result : defineProperties(result, Properties);
            };
          },
          6048: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var DESCRIPTORS = __webpack_require__2(9781);
            var definePropertyModule = __webpack_require__2(3070);
            var anObject = __webpack_require__2(9670);
            var objectKeys = __webpack_require__2(1956);
            module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
              anObject(O);
              var keys = objectKeys(Properties);
              var length = keys.length;
              var index2 = 0;
              var key;
              while (length > index2)
                definePropertyModule.f(O, key = keys[index2++], Properties[key]);
              return O;
            };
          },
          3070: function(__unused_webpack_module, exports2, __webpack_require__2) {
            var DESCRIPTORS = __webpack_require__2(9781);
            var IE8_DOM_DEFINE = __webpack_require__2(4664);
            var anObject = __webpack_require__2(9670);
            var toPrimitive = __webpack_require__2(7593);
            var nativeDefineProperty = Object.defineProperty;
            exports2.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeDefineProperty(O, P, Attributes);
                } catch (error2) {
                }
              if ("get" in Attributes || "set" in Attributes)
                throw TypeError("Accessors not supported");
              if ("value" in Attributes)
                O[P] = Attributes.value;
              return O;
            };
          },
          1236: function(__unused_webpack_module, exports2, __webpack_require__2) {
            var DESCRIPTORS = __webpack_require__2(9781);
            var propertyIsEnumerableModule = __webpack_require__2(5296);
            var createPropertyDescriptor = __webpack_require__2(9114);
            var toIndexedObject = __webpack_require__2(5656);
            var toPrimitive = __webpack_require__2(7593);
            var has = __webpack_require__2(6656);
            var IE8_DOM_DEFINE = __webpack_require__2(4664);
            var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            exports2.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
              O = toIndexedObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error2) {
                }
              if (has(O, P))
                return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
            };
          },
          8006: function(__unused_webpack_module, exports2, __webpack_require__2) {
            var internalObjectKeys = __webpack_require__2(6324);
            var enumBugKeys = __webpack_require__2(748);
            var hiddenKeys = enumBugKeys.concat("length", "prototype");
            exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
              return internalObjectKeys(O, hiddenKeys);
            };
          },
          5181: function(__unused_webpack_module, exports2) {
            exports2.f = Object.getOwnPropertySymbols;
          },
          9518: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var has = __webpack_require__2(6656);
            var toObject = __webpack_require__2(7908);
            var sharedKey = __webpack_require__2(6200);
            var CORRECT_PROTOTYPE_GETTER = __webpack_require__2(8544);
            var IE_PROTO = sharedKey("IE_PROTO");
            var ObjectPrototype = Object.prototype;
            module2.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
              O = toObject(O);
              if (has(O, IE_PROTO))
                return O[IE_PROTO];
              if (typeof O.constructor == "function" && O instanceof O.constructor) {
                return O.constructor.prototype;
              }
              return O instanceof Object ? ObjectPrototype : null;
            };
          },
          6324: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var has = __webpack_require__2(6656);
            var toIndexedObject = __webpack_require__2(5656);
            var indexOf = __webpack_require__2(1318).indexOf;
            var hiddenKeys = __webpack_require__2(3501);
            module2.exports = function(object, names) {
              var O = toIndexedObject(object);
              var i = 0;
              var result = [];
              var key;
              for (key in O)
                !has(hiddenKeys, key) && has(O, key) && result.push(key);
              while (names.length > i)
                if (has(O, key = names[i++])) {
                  ~indexOf(result, key) || result.push(key);
                }
              return result;
            };
          },
          1956: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var internalObjectKeys = __webpack_require__2(6324);
            var enumBugKeys = __webpack_require__2(748);
            module2.exports = Object.keys || function keys(O) {
              return internalObjectKeys(O, enumBugKeys);
            };
          },
          5296: function(__unused_webpack_module, exports2) {
            "use strict";
            var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
            var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
            exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
              var descriptor = getOwnPropertyDescriptor(this, V);
              return !!descriptor && descriptor.enumerable;
            } : nativePropertyIsEnumerable;
          },
          7674: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var anObject = __webpack_require__2(9670);
            var aPossiblePrototype = __webpack_require__2(6077);
            module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
              var CORRECT_SETTER = false;
              var test = {};
              var setter;
              try {
                setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
                setter.call(test, []);
                CORRECT_SETTER = test instanceof Array;
              } catch (error2) {
              }
              return function setPrototypeOf(O, proto) {
                anObject(O);
                aPossiblePrototype(proto);
                if (CORRECT_SETTER)
                  setter.call(O, proto);
                else
                  O.__proto__ = proto;
                return O;
              };
            }() : void 0);
          },
          288: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var TO_STRING_TAG_SUPPORT = __webpack_require__2(1694);
            var classof = __webpack_require__2(648);
            module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
              return "[object " + classof(this) + "]";
            };
          },
          3887: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var getBuiltIn = __webpack_require__2(5005);
            var getOwnPropertyNamesModule = __webpack_require__2(8006);
            var getOwnPropertySymbolsModule = __webpack_require__2(5181);
            var anObject = __webpack_require__2(9670);
            module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys2(it) {
              var keys = getOwnPropertyNamesModule.f(anObject(it));
              var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
              return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
            };
          },
          857: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            module2.exports = global;
          },
          2248: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var redefine = __webpack_require__2(1320);
            module2.exports = function(target, src, options2) {
              for (var key in src)
                redefine(target, key, src[key], options2);
              return target;
            };
          },
          1320: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var has = __webpack_require__2(6656);
            var setGlobal = __webpack_require__2(3505);
            var inspectSource = __webpack_require__2(2788);
            var InternalStateModule = __webpack_require__2(9909);
            var getInternalState = InternalStateModule.get;
            var enforceInternalState = InternalStateModule.enforce;
            var TEMPLATE = String(String).split("String");
            (module2.exports = function(O, key, value, options2) {
              var unsafe = options2 ? !!options2.unsafe : false;
              var simple = options2 ? !!options2.enumerable : false;
              var noTargetGet = options2 ? !!options2.noTargetGet : false;
              var state;
              if (typeof value == "function") {
                if (typeof key == "string" && !has(value, "name")) {
                  createNonEnumerableProperty(value, "name", key);
                }
                state = enforceInternalState(value);
                if (!state.source) {
                  state.source = TEMPLATE.join(typeof key == "string" ? key : "");
                }
              }
              if (O === global) {
                if (simple)
                  O[key] = value;
                else
                  setGlobal(key, value);
                return;
              } else if (!unsafe) {
                delete O[key];
              } else if (!noTargetGet && O[key]) {
                simple = true;
              }
              if (simple)
                O[key] = value;
              else
                createNonEnumerableProperty(O, key, value);
            })(Function.prototype, "toString", function toString() {
              return typeof this == "function" && getInternalState(this).source || inspectSource(this);
            });
          },
          7651: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var classof = __webpack_require__2(4326);
            var regexpExec = __webpack_require__2(2261);
            module2.exports = function(R, S) {
              var exec = R.exec;
              if (typeof exec === "function") {
                var result = exec.call(R, S);
                if (typeof result !== "object") {
                  throw TypeError("RegExp exec method returned something other than an Object or null");
                }
                return result;
              }
              if (classof(R) !== "RegExp") {
                throw TypeError("RegExp#exec called on incompatible receiver");
              }
              return regexpExec.call(R, S);
            };
          },
          2261: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var regexpFlags = __webpack_require__2(7066);
            var stickyHelpers = __webpack_require__2(2999);
            var nativeExec = RegExp.prototype.exec;
            var nativeReplace = String.prototype.replace;
            var patchedExec = nativeExec;
            var UPDATES_LAST_INDEX_WRONG = function() {
              var re1 = /a/;
              var re2 = /b*/g;
              nativeExec.call(re1, "a");
              nativeExec.call(re2, "a");
              return re1.lastIndex !== 0 || re2.lastIndex !== 0;
            }();
            var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;
            var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
            var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;
            if (PATCH) {
              patchedExec = function exec(str) {
                var re = this;
                var lastIndex, reCopy, match, i;
                var sticky = UNSUPPORTED_Y && re.sticky;
                var flags = regexpFlags.call(re);
                var source = re.source;
                var charsAdded = 0;
                var strCopy = str;
                if (sticky) {
                  flags = flags.replace("y", "");
                  if (flags.indexOf("g") === -1) {
                    flags += "g";
                  }
                  strCopy = String(str).slice(re.lastIndex);
                  if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== "\n")) {
                    source = "(?: " + source + ")";
                    strCopy = " " + strCopy;
                    charsAdded++;
                  }
                  reCopy = new RegExp("^(?:" + source + ")", flags);
                }
                if (NPCG_INCLUDED) {
                  reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
                }
                if (UPDATES_LAST_INDEX_WRONG)
                  lastIndex = re.lastIndex;
                match = nativeExec.call(sticky ? reCopy : re, strCopy);
                if (sticky) {
                  if (match) {
                    match.input = match.input.slice(charsAdded);
                    match[0] = match[0].slice(charsAdded);
                    match.index = re.lastIndex;
                    re.lastIndex += match[0].length;
                  } else
                    re.lastIndex = 0;
                } else if (UPDATES_LAST_INDEX_WRONG && match) {
                  re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
                }
                if (NPCG_INCLUDED && match && match.length > 1) {
                  nativeReplace.call(match[0], reCopy, function() {
                    for (i = 1; i < arguments.length - 2; i++) {
                      if (arguments[i] === void 0)
                        match[i] = void 0;
                    }
                  });
                }
                return match;
              };
            }
            module2.exports = patchedExec;
          },
          7066: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var anObject = __webpack_require__2(9670);
            module2.exports = function() {
              var that = anObject(this);
              var result = "";
              if (that.global)
                result += "g";
              if (that.ignoreCase)
                result += "i";
              if (that.multiline)
                result += "m";
              if (that.dotAll)
                result += "s";
              if (that.unicode)
                result += "u";
              if (that.sticky)
                result += "y";
              return result;
            };
          },
          2999: function(__unused_webpack_module, exports2, __webpack_require__2) {
            "use strict";
            var fails = __webpack_require__2(7293);
            function RE(s, f) {
              return RegExp(s, f);
            }
            exports2.UNSUPPORTED_Y = fails(function() {
              var re = RE("a", "y");
              re.lastIndex = 2;
              return re.exec("abcd") != null;
            });
            exports2.BROKEN_CARET = fails(function() {
              var re = RE("^r", "gy");
              re.lastIndex = 2;
              return re.exec("str") != null;
            });
          },
          4488: function(module2) {
            module2.exports = function(it) {
              if (it == void 0)
                throw TypeError("Can't call method on " + it);
              return it;
            };
          },
          3505: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            module2.exports = function(key, value) {
              try {
                createNonEnumerableProperty(global, key, value);
              } catch (error2) {
                global[key] = value;
              }
              return value;
            };
          },
          6340: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var getBuiltIn = __webpack_require__2(5005);
            var definePropertyModule = __webpack_require__2(3070);
            var wellKnownSymbol = __webpack_require__2(5112);
            var DESCRIPTORS = __webpack_require__2(9781);
            var SPECIES = wellKnownSymbol("species");
            module2.exports = function(CONSTRUCTOR_NAME) {
              var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
              var defineProperty = definePropertyModule.f;
              if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
                defineProperty(Constructor, SPECIES, {
                  configurable: true,
                  get: function() {
                    return this;
                  }
                });
              }
            };
          },
          8003: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var defineProperty = __webpack_require__2(3070).f;
            var has = __webpack_require__2(6656);
            var wellKnownSymbol = __webpack_require__2(5112);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            module2.exports = function(it, TAG, STATIC) {
              if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
                defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
              }
            };
          },
          6200: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var shared = __webpack_require__2(2309);
            var uid = __webpack_require__2(9711);
            var keys = shared("keys");
            module2.exports = function(key) {
              return keys[key] || (keys[key] = uid(key));
            };
          },
          5465: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var setGlobal = __webpack_require__2(3505);
            var SHARED = "__core-js_shared__";
            var store = global[SHARED] || setGlobal(SHARED, {});
            module2.exports = store;
          },
          2309: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var IS_PURE = __webpack_require__2(1913);
            var store = __webpack_require__2(5465);
            (module2.exports = function(key, value) {
              return store[key] || (store[key] = value !== void 0 ? value : {});
            })("versions", []).push({
              version: "3.9.0",
              mode: IS_PURE ? "pure" : "global",
              copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
            });
          },
          6707: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var anObject = __webpack_require__2(9670);
            var aFunction = __webpack_require__2(3099);
            var wellKnownSymbol = __webpack_require__2(5112);
            var SPECIES = wellKnownSymbol("species");
            module2.exports = function(O, defaultConstructor) {
              var C = anObject(O).constructor;
              var S;
              return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? defaultConstructor : aFunction(S);
            };
          },
          8710: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toInteger = __webpack_require__2(9958);
            var requireObjectCoercible = __webpack_require__2(4488);
            var createMethod = function(CONVERT_TO_STRING) {
              return function($this, pos) {
                var S = String(requireObjectCoercible($this));
                var position = toInteger(pos);
                var size = S.length;
                var first, second;
                if (position < 0 || position >= size)
                  return CONVERT_TO_STRING ? "" : void 0;
                first = S.charCodeAt(position);
                return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
              };
            };
            module2.exports = {
              codeAt: createMethod(false),
              charAt: createMethod(true)
            };
          },
          3197: function(module2) {
            "use strict";
            var maxInt2 = 2147483647;
            var base2 = 36;
            var tMin2 = 1;
            var tMax2 = 26;
            var skew2 = 38;
            var damp2 = 700;
            var initialBias2 = 72;
            var initialN2 = 128;
            var delimiter2 = "-";
            var regexNonASCII2 = /[^\0-\u007E]/;
            var regexSeparators2 = /[.\u3002\uFF0E\uFF61]/g;
            var OVERFLOW_ERROR = "Overflow: input needs wider integers to process";
            var baseMinusTMin2 = base2 - tMin2;
            var floor2 = Math.floor;
            var stringFromCharCode2 = String.fromCharCode;
            var ucs2decode2 = function(string) {
              var output = [];
              var counter = 0;
              var length = string.length;
              while (counter < length) {
                var value = string.charCodeAt(counter++);
                if (value >= 55296 && value <= 56319 && counter < length) {
                  var extra = string.charCodeAt(counter++);
                  if ((extra & 64512) == 56320) {
                    output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
                  } else {
                    output.push(value);
                    counter--;
                  }
                } else {
                  output.push(value);
                }
              }
              return output;
            };
            var digitToBasic2 = function(digit) {
              return digit + 22 + 75 * (digit < 26);
            };
            var adapt2 = function(delta, numPoints, firstTime) {
              var k = 0;
              delta = firstTime ? floor2(delta / damp2) : delta >> 1;
              delta += floor2(delta / numPoints);
              for (; delta > baseMinusTMin2 * tMax2 >> 1; k += base2) {
                delta = floor2(delta / baseMinusTMin2);
              }
              return floor2(k + (baseMinusTMin2 + 1) * delta / (delta + skew2));
            };
            var encode2 = function(input) {
              var output = [];
              input = ucs2decode2(input);
              var inputLength = input.length;
              var n = initialN2;
              var delta = 0;
              var bias = initialBias2;
              var i, currentValue;
              for (i = 0; i < input.length; i++) {
                currentValue = input[i];
                if (currentValue < 128) {
                  output.push(stringFromCharCode2(currentValue));
                }
              }
              var basicLength = output.length;
              var handledCPCount = basicLength;
              if (basicLength) {
                output.push(delimiter2);
              }
              while (handledCPCount < inputLength) {
                var m = maxInt2;
                for (i = 0; i < input.length; i++) {
                  currentValue = input[i];
                  if (currentValue >= n && currentValue < m) {
                    m = currentValue;
                  }
                }
                var handledCPCountPlusOne = handledCPCount + 1;
                if (m - n > floor2((maxInt2 - delta) / handledCPCountPlusOne)) {
                  throw RangeError(OVERFLOW_ERROR);
                }
                delta += (m - n) * handledCPCountPlusOne;
                n = m;
                for (i = 0; i < input.length; i++) {
                  currentValue = input[i];
                  if (currentValue < n && ++delta > maxInt2) {
                    throw RangeError(OVERFLOW_ERROR);
                  }
                  if (currentValue == n) {
                    var q = delta;
                    for (var k = base2; ; k += base2) {
                      var t = k <= bias ? tMin2 : k >= bias + tMax2 ? tMax2 : k - bias;
                      if (q < t)
                        break;
                      var qMinusT = q - t;
                      var baseMinusT = base2 - t;
                      output.push(stringFromCharCode2(digitToBasic2(t + qMinusT % baseMinusT)));
                      q = floor2(qMinusT / baseMinusT);
                    }
                    output.push(stringFromCharCode2(digitToBasic2(q)));
                    bias = adapt2(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                    delta = 0;
                    ++handledCPCount;
                  }
                }
                ++delta;
                ++n;
              }
              return output.join("");
            };
            module2.exports = function(input) {
              var encoded = [];
              var labels = input.toLowerCase().replace(regexSeparators2, ".").split(".");
              var i, label;
              for (i = 0; i < labels.length; i++) {
                label = labels[i];
                encoded.push(regexNonASCII2.test(label) ? "xn--" + encode2(label) : label);
              }
              return encoded.join(".");
            };
          },
          6091: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            var whitespaces = __webpack_require__2(1361);
            var non = "\u200B\x85\u180E";
            module2.exports = function(METHOD_NAME) {
              return fails(function() {
                return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
              });
            };
          },
          3111: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var requireObjectCoercible = __webpack_require__2(4488);
            var whitespaces = __webpack_require__2(1361);
            var whitespace = "[" + whitespaces + "]";
            var ltrim = RegExp("^" + whitespace + whitespace + "*");
            var rtrim = RegExp(whitespace + whitespace + "*$");
            var createMethod = function(TYPE) {
              return function($this) {
                var string = String(requireObjectCoercible($this));
                if (TYPE & 1)
                  string = string.replace(ltrim, "");
                if (TYPE & 2)
                  string = string.replace(rtrim, "");
                return string;
              };
            };
            module2.exports = {
              start: createMethod(1),
              end: createMethod(2),
              trim: createMethod(3)
            };
          },
          1400: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toInteger = __webpack_require__2(9958);
            var max = Math.max;
            var min = Math.min;
            module2.exports = function(index2, length) {
              var integer = toInteger(index2);
              return integer < 0 ? max(integer + length, 0) : min(integer, length);
            };
          },
          7067: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toInteger = __webpack_require__2(9958);
            var toLength = __webpack_require__2(7466);
            module2.exports = function(it) {
              if (it === void 0)
                return 0;
              var number = toInteger(it);
              var length = toLength(number);
              if (number !== length)
                throw RangeError("Wrong length or index");
              return length;
            };
          },
          5656: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var IndexedObject = __webpack_require__2(8361);
            var requireObjectCoercible = __webpack_require__2(4488);
            module2.exports = function(it) {
              return IndexedObject(requireObjectCoercible(it));
            };
          },
          9958: function(module2) {
            var ceil = Math.ceil;
            var floor2 = Math.floor;
            module2.exports = function(argument) {
              return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor2 : ceil)(argument);
            };
          },
          7466: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toInteger = __webpack_require__2(9958);
            var min = Math.min;
            module2.exports = function(argument) {
              return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
            };
          },
          7908: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var requireObjectCoercible = __webpack_require__2(4488);
            module2.exports = function(argument) {
              return Object(requireObjectCoercible(argument));
            };
          },
          4590: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toPositiveInteger = __webpack_require__2(3002);
            module2.exports = function(it, BYTES) {
              var offset = toPositiveInteger(it);
              if (offset % BYTES)
                throw RangeError("Wrong offset");
              return offset;
            };
          },
          3002: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toInteger = __webpack_require__2(9958);
            module2.exports = function(it) {
              var result = toInteger(it);
              if (result < 0)
                throw RangeError("The argument can't be less than 0");
              return result;
            };
          },
          7593: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var isObject = __webpack_require__2(111);
            module2.exports = function(input, PREFERRED_STRING) {
              if (!isObject(input))
                return input;
              var fn, val;
              if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
                return val;
              if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input)))
                return val;
              if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
                return val;
              throw TypeError("Can't convert object to primitive value");
            };
          },
          1694: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var wellKnownSymbol = __webpack_require__2(5112);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var test = {};
            test[TO_STRING_TAG] = "z";
            module2.exports = String(test) === "[object z]";
          },
          9843: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $ = __webpack_require__2(2109);
            var global = __webpack_require__2(7854);
            var DESCRIPTORS = __webpack_require__2(9781);
            var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__2(3832);
            var ArrayBufferViewCore = __webpack_require__2(260);
            var ArrayBufferModule = __webpack_require__2(3331);
            var anInstance = __webpack_require__2(5787);
            var createPropertyDescriptor = __webpack_require__2(9114);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var toLength = __webpack_require__2(7466);
            var toIndex = __webpack_require__2(7067);
            var toOffset = __webpack_require__2(4590);
            var toPrimitive = __webpack_require__2(7593);
            var has = __webpack_require__2(6656);
            var classof = __webpack_require__2(648);
            var isObject = __webpack_require__2(111);
            var create = __webpack_require__2(30);
            var setPrototypeOf = __webpack_require__2(7674);
            var getOwnPropertyNames = __webpack_require__2(8006).f;
            var typedArrayFrom = __webpack_require__2(7321);
            var forEach2 = __webpack_require__2(2092).forEach;
            var setSpecies = __webpack_require__2(6340);
            var definePropertyModule = __webpack_require__2(3070);
            var getOwnPropertyDescriptorModule = __webpack_require__2(1236);
            var InternalStateModule = __webpack_require__2(9909);
            var inheritIfRequired = __webpack_require__2(9587);
            var getInternalState = InternalStateModule.get;
            var setInternalState = InternalStateModule.set;
            var nativeDefineProperty = definePropertyModule.f;
            var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
            var round = Math.round;
            var RangeError2 = global.RangeError;
            var ArrayBuffer2 = ArrayBufferModule.ArrayBuffer;
            var DataView2 = ArrayBufferModule.DataView;
            var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
            var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
            var TypedArray = ArrayBufferViewCore.TypedArray;
            var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
            var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
            var isTypedArray = ArrayBufferViewCore.isTypedArray;
            var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
            var WRONG_LENGTH = "Wrong length";
            var fromList = function(C, list) {
              var index2 = 0;
              var length = list.length;
              var result = new (aTypedArrayConstructor(C))(length);
              while (length > index2)
                result[index2] = list[index2++];
              return result;
            };
            var addGetter = function(it, key) {
              nativeDefineProperty(it, key, { get: function() {
                return getInternalState(this)[key];
              } });
            };
            var isArrayBuffer = function(it) {
              var klass;
              return it instanceof ArrayBuffer2 || (klass = classof(it)) == "ArrayBuffer" || klass == "SharedArrayBuffer";
            };
            var isTypedArrayIndex = function(target, key) {
              return isTypedArray(target) && typeof key != "symbol" && key in target && String(+key) == String(key);
            };
            var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
              return isTypedArrayIndex(target, key = toPrimitive(key, true)) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
            };
            var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
              if (isTypedArrayIndex(target, key = toPrimitive(key, true)) && isObject(descriptor) && has(descriptor, "value") && !has(descriptor, "get") && !has(descriptor, "set") && !descriptor.configurable && (!has(descriptor, "writable") || descriptor.writable) && (!has(descriptor, "enumerable") || descriptor.enumerable)) {
                target[key] = descriptor.value;
                return target;
              }
              return nativeDefineProperty(target, key, descriptor);
            };
            if (DESCRIPTORS) {
              if (!NATIVE_ARRAY_BUFFER_VIEWS) {
                getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
                definePropertyModule.f = wrappedDefineProperty;
                addGetter(TypedArrayPrototype, "buffer");
                addGetter(TypedArrayPrototype, "byteOffset");
                addGetter(TypedArrayPrototype, "byteLength");
                addGetter(TypedArrayPrototype, "length");
              }
              $({ target: "Object", stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
                getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
                defineProperty: wrappedDefineProperty
              });
              module2.exports = function(TYPE, wrapper, CLAMPED) {
                var BYTES = TYPE.match(/\d+$/)[0] / 8;
                var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? "Clamped" : "") + "Array";
                var GETTER = "get" + TYPE;
                var SETTER = "set" + TYPE;
                var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
                var TypedArrayConstructor = NativeTypedArrayConstructor;
                var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
                var exported = {};
                var getter = function(that, index2) {
                  var data = getInternalState(that);
                  return data.view[GETTER](index2 * BYTES + data.byteOffset, true);
                };
                var setter = function(that, index2, value) {
                  var data = getInternalState(that);
                  if (CLAMPED)
                    value = (value = round(value)) < 0 ? 0 : value > 255 ? 255 : value & 255;
                  data.view[SETTER](index2 * BYTES + data.byteOffset, value, true);
                };
                var addElement = function(that, index2) {
                  nativeDefineProperty(that, index2, {
                    get: function() {
                      return getter(this, index2);
                    },
                    set: function(value) {
                      return setter(this, index2, value);
                    },
                    enumerable: true
                  });
                };
                if (!NATIVE_ARRAY_BUFFER_VIEWS) {
                  TypedArrayConstructor = wrapper(function(that, data, offset, $length) {
                    anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
                    var index2 = 0;
                    var byteOffset = 0;
                    var buffer, byteLength, length;
                    if (!isObject(data)) {
                      length = toIndex(data);
                      byteLength = length * BYTES;
                      buffer = new ArrayBuffer2(byteLength);
                    } else if (isArrayBuffer(data)) {
                      buffer = data;
                      byteOffset = toOffset(offset, BYTES);
                      var $len = data.byteLength;
                      if ($length === void 0) {
                        if ($len % BYTES)
                          throw RangeError2(WRONG_LENGTH);
                        byteLength = $len - byteOffset;
                        if (byteLength < 0)
                          throw RangeError2(WRONG_LENGTH);
                      } else {
                        byteLength = toLength($length) * BYTES;
                        if (byteLength + byteOffset > $len)
                          throw RangeError2(WRONG_LENGTH);
                      }
                      length = byteLength / BYTES;
                    } else if (isTypedArray(data)) {
                      return fromList(TypedArrayConstructor, data);
                    } else {
                      return typedArrayFrom.call(TypedArrayConstructor, data);
                    }
                    setInternalState(that, {
                      buffer,
                      byteOffset,
                      byteLength,
                      length,
                      view: new DataView2(buffer)
                    });
                    while (index2 < length)
                      addElement(that, index2++);
                  });
                  if (setPrototypeOf)
                    setPrototypeOf(TypedArrayConstructor, TypedArray);
                  TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
                } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
                  TypedArrayConstructor = wrapper(function(dummy, data, typedArrayOffset, $length) {
                    anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
                    return inheritIfRequired(function() {
                      if (!isObject(data))
                        return new NativeTypedArrayConstructor(toIndex(data));
                      if (isArrayBuffer(data))
                        return $length !== void 0 ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== void 0 ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
                      if (isTypedArray(data))
                        return fromList(TypedArrayConstructor, data);
                      return typedArrayFrom.call(TypedArrayConstructor, data);
                    }(), dummy, TypedArrayConstructor);
                  });
                  if (setPrototypeOf)
                    setPrototypeOf(TypedArrayConstructor, TypedArray);
                  forEach2(getOwnPropertyNames(NativeTypedArrayConstructor), function(key) {
                    if (!(key in TypedArrayConstructor)) {
                      createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
                    }
                  });
                  TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
                }
                if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
                  createNonEnumerableProperty(TypedArrayConstructorPrototype, "constructor", TypedArrayConstructor);
                }
                if (TYPED_ARRAY_TAG) {
                  createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
                }
                exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
                $({
                  global: true,
                  forced: TypedArrayConstructor != NativeTypedArrayConstructor,
                  sham: !NATIVE_ARRAY_BUFFER_VIEWS
                }, exported);
                if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
                  createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
                }
                if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
                  createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
                }
                setSpecies(CONSTRUCTOR_NAME);
              };
            } else
              module2.exports = function() {
              };
          },
          3832: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var fails = __webpack_require__2(7293);
            var checkCorrectnessOfIteration = __webpack_require__2(7072);
            var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__2(260).NATIVE_ARRAY_BUFFER_VIEWS;
            var ArrayBuffer2 = global.ArrayBuffer;
            var Int8Array2 = global.Int8Array;
            module2.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function() {
              Int8Array2(1);
            }) || !fails(function() {
              new Int8Array2(-1);
            }) || !checkCorrectnessOfIteration(function(iterable) {
              new Int8Array2();
              new Int8Array2(null);
              new Int8Array2(1.5);
              new Int8Array2(iterable);
            }, true) || fails(function() {
              return new Int8Array2(new ArrayBuffer2(2), 1, void 0).length !== 1;
            });
          },
          3074: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var aTypedArrayConstructor = __webpack_require__2(260).aTypedArrayConstructor;
            var speciesConstructor = __webpack_require__2(6707);
            module2.exports = function(instance, list) {
              var C = speciesConstructor(instance, instance.constructor);
              var index2 = 0;
              var length = list.length;
              var result = new (aTypedArrayConstructor(C))(length);
              while (length > index2)
                result[index2] = list[index2++];
              return result;
            };
          },
          7321: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toObject = __webpack_require__2(7908);
            var toLength = __webpack_require__2(7466);
            var getIteratorMethod = __webpack_require__2(1246);
            var isArrayIteratorMethod = __webpack_require__2(7659);
            var bind = __webpack_require__2(9974);
            var aTypedArrayConstructor = __webpack_require__2(260).aTypedArrayConstructor;
            module2.exports = function from(source) {
              var O = toObject(source);
              var argumentsLength = arguments.length;
              var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
              var mapping = mapfn !== void 0;
              var iteratorMethod = getIteratorMethod(O);
              var i, length, result, step, iterator, next;
              if (iteratorMethod != void 0 && !isArrayIteratorMethod(iteratorMethod)) {
                iterator = iteratorMethod.call(O);
                next = iterator.next;
                O = [];
                while (!(step = next.call(iterator)).done) {
                  O.push(step.value);
                }
              }
              if (mapping && argumentsLength > 2) {
                mapfn = bind(mapfn, arguments[2], 2);
              }
              length = toLength(O.length);
              result = new (aTypedArrayConstructor(this))(length);
              for (i = 0; length > i; i++) {
                result[i] = mapping ? mapfn(O[i], i) : O[i];
              }
              return result;
            };
          },
          9711: function(module2) {
            var id = 0;
            var postfix = Math.random();
            module2.exports = function(key) {
              return "Symbol(" + String(key === void 0 ? "" : key) + ")_" + (++id + postfix).toString(36);
            };
          },
          3307: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var NATIVE_SYMBOL = __webpack_require__2(133);
            module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
          },
          5112: function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var shared = __webpack_require__2(2309);
            var has = __webpack_require__2(6656);
            var uid = __webpack_require__2(9711);
            var NATIVE_SYMBOL = __webpack_require__2(133);
            var USE_SYMBOL_AS_UID = __webpack_require__2(3307);
            var WellKnownSymbolsStore = shared("wks");
            var Symbol2 = global.Symbol;
            var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
            module2.exports = function(name) {
              if (!has(WellKnownSymbolsStore, name)) {
                if (NATIVE_SYMBOL && has(Symbol2, name))
                  WellKnownSymbolsStore[name] = Symbol2[name];
                else
                  WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
              }
              return WellKnownSymbolsStore[name];
            };
          },
          1361: function(module2) {
            module2.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
          },
          8264: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $ = __webpack_require__2(2109);
            var global = __webpack_require__2(7854);
            var arrayBufferModule = __webpack_require__2(3331);
            var setSpecies = __webpack_require__2(6340);
            var ARRAY_BUFFER = "ArrayBuffer";
            var ArrayBuffer2 = arrayBufferModule[ARRAY_BUFFER];
            var NativeArrayBuffer = global[ARRAY_BUFFER];
            $({ global: true, forced: NativeArrayBuffer !== ArrayBuffer2 }, {
              ArrayBuffer: ArrayBuffer2
            });
            setSpecies(ARRAY_BUFFER);
          },
          2222: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $ = __webpack_require__2(2109);
            var fails = __webpack_require__2(7293);
            var isArray = __webpack_require__2(3157);
            var isObject = __webpack_require__2(111);
            var toObject = __webpack_require__2(7908);
            var toLength = __webpack_require__2(7466);
            var createProperty = __webpack_require__2(6135);
            var arraySpeciesCreate = __webpack_require__2(5417);
            var arrayMethodHasSpeciesSupport = __webpack_require__2(1194);
            var wellKnownSymbol = __webpack_require__2(5112);
            var V8_VERSION = __webpack_require__2(7392);
            var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
            var MAX_SAFE_INTEGER = 9007199254740991;
            var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
            var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
              var array = [];
              array[IS_CONCAT_SPREADABLE] = false;
              return array.concat()[0] !== array;
            });
            var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
            var isConcatSpreadable = function(O) {
              if (!isObject(O))
                return false;
              var spreadable = O[IS_CONCAT_SPREADABLE];
              return spreadable !== void 0 ? !!spreadable : isArray(O);
            };
            var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
            $({ target: "Array", proto: true, forced: FORCED }, {
              concat: function concat(arg) {
                var O = toObject(this);
                var A = arraySpeciesCreate(O, 0);
                var n = 0;
                var i, k, length, len, E;
                for (i = -1, length = arguments.length; i < length; i++) {
                  E = i === -1 ? O : arguments[i];
                  if (isConcatSpreadable(E)) {
                    len = toLength(E.length);
                    if (n + len > MAX_SAFE_INTEGER)
                      throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    for (k = 0; k < len; k++, n++)
                      if (k in E)
                        createProperty(A, n, E[k]);
                  } else {
                    if (n >= MAX_SAFE_INTEGER)
                      throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    createProperty(A, n++, E);
                  }
                }
                A.length = n;
                return A;
              }
            });
          },
          7327: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $ = __webpack_require__2(2109);
            var $filter = __webpack_require__2(2092).filter;
            var arrayMethodHasSpeciesSupport = __webpack_require__2(1194);
            var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
            $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
              filter: function filter(callbackfn) {
                return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          },
          2772: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $ = __webpack_require__2(2109);
            var $indexOf = __webpack_require__2(1318).indexOf;
            var arrayMethodIsStrict = __webpack_require__2(9341);
            var nativeIndexOf = [].indexOf;
            var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
            var STRICT_METHOD = arrayMethodIsStrict("indexOf");
            $({ target: "Array", proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
              indexOf: function indexOf(searchElement) {
                return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          },
          6992: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var toIndexedObject = __webpack_require__2(5656);
            var addToUnscopables = __webpack_require__2(1223);
            var Iterators = __webpack_require__2(7497);
            var InternalStateModule = __webpack_require__2(9909);
            var defineIterator = __webpack_require__2(654);
            var ARRAY_ITERATOR = "Array Iterator";
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
            module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
              setInternalState(this, {
                type: ARRAY_ITERATOR,
                target: toIndexedObject(iterated),
                index: 0,
                kind
              });
            }, function() {
              var state = getInternalState(this);
              var target = state.target;
              var kind = state.kind;
              var index2 = state.index++;
              if (!target || index2 >= target.length) {
                state.target = void 0;
                return { value: void 0, done: true };
              }
              if (kind == "keys")
                return { value: index2, done: false };
              if (kind == "values")
                return { value: target[index2], done: false };
              return { value: [index2, target[index2]], done: false };
            }, "values");
            Iterators.Arguments = Iterators.Array;
            addToUnscopables("keys");
            addToUnscopables("values");
            addToUnscopables("entries");
          },
          1249: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $ = __webpack_require__2(2109);
            var $map = __webpack_require__2(2092).map;
            var arrayMethodHasSpeciesSupport = __webpack_require__2(1194);
            var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
            $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
              map: function map2(callbackfn) {
                return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          },
          7042: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $ = __webpack_require__2(2109);
            var isObject = __webpack_require__2(111);
            var isArray = __webpack_require__2(3157);
            var toAbsoluteIndex = __webpack_require__2(1400);
            var toLength = __webpack_require__2(7466);
            var toIndexedObject = __webpack_require__2(5656);
            var createProperty = __webpack_require__2(6135);
            var wellKnownSymbol = __webpack_require__2(5112);
            var arrayMethodHasSpeciesSupport = __webpack_require__2(1194);
            var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
            var SPECIES = wellKnownSymbol("species");
            var nativeSlice = [].slice;
            var max = Math.max;
            $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
              slice: function slice(start, end) {
                var O = toIndexedObject(this);
                var length = toLength(O.length);
                var k = toAbsoluteIndex(start, length);
                var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
                var Constructor, result, n;
                if (isArray(O)) {
                  Constructor = O.constructor;
                  if (typeof Constructor == "function" && (Constructor === Array || isArray(Constructor.prototype))) {
                    Constructor = void 0;
                  } else if (isObject(Constructor)) {
                    Constructor = Constructor[SPECIES];
                    if (Constructor === null)
                      Constructor = void 0;
                  }
                  if (Constructor === Array || Constructor === void 0) {
                    return nativeSlice.call(O, k, fin);
                  }
                }
                result = new (Constructor === void 0 ? Array : Constructor)(max(fin - k, 0));
                for (n = 0; k < fin; k++, n++)
                  if (k in O)
                    createProperty(result, n, O[k]);
                result.length = n;
                return result;
              }
            });
          },
          561: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $ = __webpack_require__2(2109);
            var toAbsoluteIndex = __webpack_require__2(1400);
            var toInteger = __webpack_require__2(9958);
            var toLength = __webpack_require__2(7466);
            var toObject = __webpack_require__2(7908);
            var arraySpeciesCreate = __webpack_require__2(5417);
            var createProperty = __webpack_require__2(6135);
            var arrayMethodHasSpeciesSupport = __webpack_require__2(1194);
            var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
            var max = Math.max;
            var min = Math.min;
            var MAX_SAFE_INTEGER = 9007199254740991;
            var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
            $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
              splice: function splice(start, deleteCount) {
                var O = toObject(this);
                var len = toLength(O.length);
                var actualStart = toAbsoluteIndex(start, len);
                var argumentsLength = arguments.length;
                var insertCount, actualDeleteCount, A, k, from, to;
                if (argumentsLength === 0) {
                  insertCount = actualDeleteCount = 0;
                } else if (argumentsLength === 1) {
                  insertCount = 0;
                  actualDeleteCount = len - actualStart;
                } else {
                  insertCount = argumentsLength - 2;
                  actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
                }
                if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
                  throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
                }
                A = arraySpeciesCreate(O, actualDeleteCount);
                for (k = 0; k < actualDeleteCount; k++) {
                  from = actualStart + k;
                  if (from in O)
                    createProperty(A, k, O[from]);
                }
                A.length = actualDeleteCount;
                if (insertCount < actualDeleteCount) {
                  for (k = actualStart; k < len - actualDeleteCount; k++) {
                    from = k + actualDeleteCount;
                    to = k + insertCount;
                    if (from in O)
                      O[to] = O[from];
                    else
                      delete O[to];
                  }
                  for (k = len; k > len - actualDeleteCount + insertCount; k--)
                    delete O[k - 1];
                } else if (insertCount > actualDeleteCount) {
                  for (k = len - actualDeleteCount; k > actualStart; k--) {
                    from = k + actualDeleteCount - 1;
                    to = k + insertCount - 1;
                    if (from in O)
                      O[to] = O[from];
                    else
                      delete O[to];
                  }
                }
                for (k = 0; k < insertCount; k++) {
                  O[k + actualStart] = arguments[k + 2];
                }
                O.length = len - actualDeleteCount + insertCount;
                return A;
              }
            });
          },
          8309: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            var DESCRIPTORS = __webpack_require__2(9781);
            var defineProperty = __webpack_require__2(3070).f;
            var FunctionPrototype = Function.prototype;
            var FunctionPrototypeToString = FunctionPrototype.toString;
            var nameRE = /^\s*function ([^ (]*)/;
            var NAME = "name";
            if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
              defineProperty(FunctionPrototype, NAME, {
                configurable: true,
                get: function() {
                  try {
                    return FunctionPrototypeToString.call(this).match(nameRE)[1];
                  } catch (error2) {
                    return "";
                  }
                }
              });
            }
          },
          489: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            var $ = __webpack_require__2(2109);
            var fails = __webpack_require__2(7293);
            var toObject = __webpack_require__2(7908);
            var nativeGetPrototypeOf = __webpack_require__2(9518);
            var CORRECT_PROTOTYPE_GETTER = __webpack_require__2(8544);
            var FAILS_ON_PRIMITIVES = fails(function() {
              nativeGetPrototypeOf(1);
            });
            $({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
              getPrototypeOf: function getPrototypeOf(it) {
                return nativeGetPrototypeOf(toObject(it));
              }
            });
          },
          1539: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            var TO_STRING_TAG_SUPPORT = __webpack_require__2(1694);
            var redefine = __webpack_require__2(1320);
            var toString = __webpack_require__2(288);
            if (!TO_STRING_TAG_SUPPORT) {
              redefine(Object.prototype, "toString", toString, { unsafe: true });
            }
          },
          4916: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $ = __webpack_require__2(2109);
            var exec = __webpack_require__2(2261);
            $({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
              exec
            });
          },
          9714: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var redefine = __webpack_require__2(1320);
            var anObject = __webpack_require__2(9670);
            var fails = __webpack_require__2(7293);
            var flags = __webpack_require__2(7066);
            var TO_STRING = "toString";
            var RegExpPrototype = RegExp.prototype;
            var nativeToString = RegExpPrototype[TO_STRING];
            var NOT_GENERIC = fails(function() {
              return nativeToString.call({ source: "a", flags: "b" }) != "/a/b";
            });
            var INCORRECT_NAME = nativeToString.name != TO_STRING;
            if (NOT_GENERIC || INCORRECT_NAME) {
              redefine(RegExp.prototype, TO_STRING, function toString() {
                var R = anObject(this);
                var p = String(R.source);
                var rf = R.flags;
                var f = String(rf === void 0 && R instanceof RegExp && !("flags" in RegExpPrototype) ? flags.call(R) : rf);
                return "/" + p + "/" + f;
              }, { unsafe: true });
            }
          },
          8783: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var charAt = __webpack_require__2(8710).charAt;
            var InternalStateModule = __webpack_require__2(9909);
            var defineIterator = __webpack_require__2(654);
            var STRING_ITERATOR = "String Iterator";
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
            defineIterator(String, "String", function(iterated) {
              setInternalState(this, {
                type: STRING_ITERATOR,
                string: String(iterated),
                index: 0
              });
            }, function next() {
              var state = getInternalState(this);
              var string = state.string;
              var index2 = state.index;
              var point;
              if (index2 >= string.length)
                return { value: void 0, done: true };
              point = charAt(string, index2);
              state.index += point.length;
              return { value: point, done: false };
            });
          },
          4723: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var fixRegExpWellKnownSymbolLogic = __webpack_require__2(7007);
            var anObject = __webpack_require__2(9670);
            var toLength = __webpack_require__2(7466);
            var requireObjectCoercible = __webpack_require__2(4488);
            var advanceStringIndex = __webpack_require__2(1530);
            var regExpExec = __webpack_require__2(7651);
            fixRegExpWellKnownSymbolLogic("match", 1, function(MATCH, nativeMatch, maybeCallNative) {
              return [
                function match(regexp) {
                  var O = requireObjectCoercible(this);
                  var matcher = regexp == void 0 ? void 0 : regexp[MATCH];
                  return matcher !== void 0 ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
                },
                function(regexp) {
                  var res = maybeCallNative(nativeMatch, regexp, this);
                  if (res.done)
                    return res.value;
                  var rx = anObject(regexp);
                  var S = String(this);
                  if (!rx.global)
                    return regExpExec(rx, S);
                  var fullUnicode = rx.unicode;
                  rx.lastIndex = 0;
                  var A = [];
                  var n = 0;
                  var result;
                  while ((result = regExpExec(rx, S)) !== null) {
                    var matchStr = String(result[0]);
                    A[n] = matchStr;
                    if (matchStr === "")
                      rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                    n++;
                  }
                  return n === 0 ? null : A;
                }
              ];
            });
          },
          5306: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var fixRegExpWellKnownSymbolLogic = __webpack_require__2(7007);
            var anObject = __webpack_require__2(9670);
            var toLength = __webpack_require__2(7466);
            var toInteger = __webpack_require__2(9958);
            var requireObjectCoercible = __webpack_require__2(4488);
            var advanceStringIndex = __webpack_require__2(1530);
            var getSubstitution = __webpack_require__2(647);
            var regExpExec = __webpack_require__2(7651);
            var max = Math.max;
            var min = Math.min;
            var maybeToString = function(it) {
              return it === void 0 ? it : String(it);
            };
            fixRegExpWellKnownSymbolLogic("replace", 2, function(REPLACE, nativeReplace, maybeCallNative, reason) {
              var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
              var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
              var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
              return [
                function replace(searchValue, replaceValue) {
                  var O = requireObjectCoercible(this);
                  var replacer = searchValue == void 0 ? void 0 : searchValue[REPLACE];
                  return replacer !== void 0 ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
                },
                function(regexp, replaceValue) {
                  if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === "string" && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
                    var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
                    if (res.done)
                      return res.value;
                  }
                  var rx = anObject(regexp);
                  var S = String(this);
                  var functionalReplace = typeof replaceValue === "function";
                  if (!functionalReplace)
                    replaceValue = String(replaceValue);
                  var global = rx.global;
                  if (global) {
                    var fullUnicode = rx.unicode;
                    rx.lastIndex = 0;
                  }
                  var results = [];
                  while (true) {
                    var result = regExpExec(rx, S);
                    if (result === null)
                      break;
                    results.push(result);
                    if (!global)
                      break;
                    var matchStr = String(result[0]);
                    if (matchStr === "")
                      rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                  }
                  var accumulatedResult = "";
                  var nextSourcePosition = 0;
                  for (var i = 0; i < results.length; i++) {
                    result = results[i];
                    var matched = String(result[0]);
                    var position = max(min(toInteger(result.index), S.length), 0);
                    var captures = [];
                    for (var j = 1; j < result.length; j++)
                      captures.push(maybeToString(result[j]));
                    var namedCaptures = result.groups;
                    if (functionalReplace) {
                      var replacerArgs = [matched].concat(captures, position, S);
                      if (namedCaptures !== void 0)
                        replacerArgs.push(namedCaptures);
                      var replacement = String(replaceValue.apply(void 0, replacerArgs));
                    } else {
                      replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                    }
                    if (position >= nextSourcePosition) {
                      accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                      nextSourcePosition = position + matched.length;
                    }
                  }
                  return accumulatedResult + S.slice(nextSourcePosition);
                }
              ];
            });
          },
          3123: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var fixRegExpWellKnownSymbolLogic = __webpack_require__2(7007);
            var isRegExp = __webpack_require__2(7850);
            var anObject = __webpack_require__2(9670);
            var requireObjectCoercible = __webpack_require__2(4488);
            var speciesConstructor = __webpack_require__2(6707);
            var advanceStringIndex = __webpack_require__2(1530);
            var toLength = __webpack_require__2(7466);
            var callRegExpExec = __webpack_require__2(7651);
            var regexpExec = __webpack_require__2(2261);
            var fails = __webpack_require__2(7293);
            var arrayPush = [].push;
            var min = Math.min;
            var MAX_UINT32 = 4294967295;
            var SUPPORTS_Y = !fails(function() {
              return !RegExp(MAX_UINT32, "y");
            });
            fixRegExpWellKnownSymbolLogic("split", 2, function(SPLIT, nativeSplit, maybeCallNative) {
              var internalSplit;
              if ("abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
                internalSplit = function(separator, limit) {
                  var string = String(requireObjectCoercible(this));
                  var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
                  if (lim === 0)
                    return [];
                  if (separator === void 0)
                    return [string];
                  if (!isRegExp(separator)) {
                    return nativeSplit.call(string, separator, lim);
                  }
                  var output = [];
                  var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
                  var lastLastIndex = 0;
                  var separatorCopy = new RegExp(separator.source, flags + "g");
                  var match, lastIndex, lastLength;
                  while (match = regexpExec.call(separatorCopy, string)) {
                    lastIndex = separatorCopy.lastIndex;
                    if (lastIndex > lastLastIndex) {
                      output.push(string.slice(lastLastIndex, match.index));
                      if (match.length > 1 && match.index < string.length)
                        arrayPush.apply(output, match.slice(1));
                      lastLength = match[0].length;
                      lastLastIndex = lastIndex;
                      if (output.length >= lim)
                        break;
                    }
                    if (separatorCopy.lastIndex === match.index)
                      separatorCopy.lastIndex++;
                  }
                  if (lastLastIndex === string.length) {
                    if (lastLength || !separatorCopy.test(""))
                      output.push("");
                  } else
                    output.push(string.slice(lastLastIndex));
                  return output.length > lim ? output.slice(0, lim) : output;
                };
              } else if ("0".split(void 0, 0).length) {
                internalSplit = function(separator, limit) {
                  return separator === void 0 && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
                };
              } else
                internalSplit = nativeSplit;
              return [
                function split(separator, limit) {
                  var O = requireObjectCoercible(this);
                  var splitter = separator == void 0 ? void 0 : separator[SPLIT];
                  return splitter !== void 0 ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
                },
                function(regexp, limit) {
                  var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
                  if (res.done)
                    return res.value;
                  var rx = anObject(regexp);
                  var S = String(this);
                  var C = speciesConstructor(rx, RegExp);
                  var unicodeMatching = rx.unicode;
                  var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
                  var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
                  var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
                  if (lim === 0)
                    return [];
                  if (S.length === 0)
                    return callRegExpExec(splitter, S) === null ? [S] : [];
                  var p = 0;
                  var q = 0;
                  var A = [];
                  while (q < S.length) {
                    splitter.lastIndex = SUPPORTS_Y ? q : 0;
                    var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                    var e;
                    if (z === null || (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                      q = advanceStringIndex(S, q, unicodeMatching);
                    } else {
                      A.push(S.slice(p, q));
                      if (A.length === lim)
                        return A;
                      for (var i = 1; i <= z.length - 1; i++) {
                        A.push(z[i]);
                        if (A.length === lim)
                          return A;
                      }
                      q = p = e;
                    }
                  }
                  A.push(S.slice(p));
                  return A;
                }
              ];
            }, !SUPPORTS_Y);
          },
          3210: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var $ = __webpack_require__2(2109);
            var $trim = __webpack_require__2(3111).trim;
            var forcedStringTrimMethod = __webpack_require__2(6091);
            $({ target: "String", proto: true, forced: forcedStringTrimMethod("trim") }, {
              trim: function trim() {
                return $trim(this);
              }
            });
          },
          2990: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $copyWithin = __webpack_require__2(1048);
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("copyWithin", function copyWithin(target, start) {
              return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : void 0);
            });
          },
          8927: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $every = __webpack_require__2(2092).every;
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("every", function every(callbackfn) {
              return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
            });
          },
          3105: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $fill = __webpack_require__2(1285);
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("fill", function fill(value) {
              return $fill.apply(aTypedArray(this), arguments);
            });
          },
          5035: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $filter = __webpack_require__2(2092).filter;
            var fromSpeciesAndList = __webpack_require__2(3074);
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("filter", function filter(callbackfn) {
              var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
              return fromSpeciesAndList(this, list);
            });
          },
          7174: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $findIndex = __webpack_require__2(2092).findIndex;
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("findIndex", function findIndex(predicate) {
              return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
            });
          },
          4345: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $find = __webpack_require__2(2092).find;
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("find", function find2(predicate) {
              return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
            });
          },
          2846: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $forEach = __webpack_require__2(2092).forEach;
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("forEach", function forEach2(callbackfn) {
              $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
            });
          },
          4731: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $includes = __webpack_require__2(1318).includes;
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("includes", function includes(searchElement) {
              return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
            });
          },
          7209: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $indexOf = __webpack_require__2(1318).indexOf;
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("indexOf", function indexOf(searchElement) {
              return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
            });
          },
          6319: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var global = __webpack_require__2(7854);
            var ArrayBufferViewCore = __webpack_require__2(260);
            var ArrayIterators = __webpack_require__2(6992);
            var wellKnownSymbol = __webpack_require__2(5112);
            var ITERATOR = wellKnownSymbol("iterator");
            var Uint8Array2 = global.Uint8Array;
            var arrayValues = ArrayIterators.values;
            var arrayKeys = ArrayIterators.keys;
            var arrayEntries = ArrayIterators.entries;
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            var nativeTypedArrayIterator = Uint8Array2 && Uint8Array2.prototype[ITERATOR];
            var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == "values" || nativeTypedArrayIterator.name == void 0);
            var typedArrayValues = function values() {
              return arrayValues.call(aTypedArray(this));
            };
            exportTypedArrayMethod("entries", function entries() {
              return arrayEntries.call(aTypedArray(this));
            });
            exportTypedArrayMethod("keys", function keys() {
              return arrayKeys.call(aTypedArray(this));
            });
            exportTypedArrayMethod("values", typedArrayValues, !CORRECT_ITER_NAME);
            exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);
          },
          8867: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            var $join = [].join;
            exportTypedArrayMethod("join", function join(separator) {
              return $join.apply(aTypedArray(this), arguments);
            });
          },
          7789: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $lastIndexOf = __webpack_require__2(6583);
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("lastIndexOf", function lastIndexOf(searchElement) {
              return $lastIndexOf.apply(aTypedArray(this), arguments);
            });
          },
          3739: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $map = __webpack_require__2(2092).map;
            var speciesConstructor = __webpack_require__2(6707);
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("map", function map2(mapfn) {
              return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : void 0, function(O, length) {
                return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
              });
            });
          },
          4483: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $reduceRight = __webpack_require__2(3671).right;
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("reduceRight", function reduceRight(callbackfn) {
              return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
            });
          },
          9368: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $reduce = __webpack_require__2(3671).left;
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("reduce", function reduce(callbackfn) {
              return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
            });
          },
          2056: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            var floor2 = Math.floor;
            exportTypedArrayMethod("reverse", function reverse() {
              var that = this;
              var length = aTypedArray(that).length;
              var middle = floor2(length / 2);
              var index2 = 0;
              var value;
              while (index2 < middle) {
                value = that[index2];
                that[index2++] = that[--length];
                that[length] = value;
              }
              return that;
            });
          },
          3462: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var toLength = __webpack_require__2(7466);
            var toOffset = __webpack_require__2(4590);
            var toObject = __webpack_require__2(7908);
            var fails = __webpack_require__2(7293);
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            var FORCED = fails(function() {
              new Int8Array(1).set({});
            });
            exportTypedArrayMethod("set", function set(arrayLike) {
              aTypedArray(this);
              var offset = toOffset(arguments.length > 1 ? arguments[1] : void 0, 1);
              var length = this.length;
              var src = toObject(arrayLike);
              var len = toLength(src.length);
              var index2 = 0;
              if (len + offset > length)
                throw RangeError("Wrong length");
              while (index2 < len)
                this[offset + index2] = src[index2++];
            }, FORCED);
          },
          678: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var speciesConstructor = __webpack_require__2(6707);
            var fails = __webpack_require__2(7293);
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            var $slice = [].slice;
            var FORCED = fails(function() {
              new Int8Array(1).slice();
            });
            exportTypedArrayMethod("slice", function slice(start, end) {
              var list = $slice.call(aTypedArray(this), start, end);
              var C = speciesConstructor(this, this.constructor);
              var index2 = 0;
              var length = list.length;
              var result = new (aTypedArrayConstructor(C))(length);
              while (length > index2)
                result[index2] = list[index2++];
              return result;
            }, FORCED);
          },
          7462: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var $some = __webpack_require__2(2092).some;
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("some", function some(callbackfn) {
              return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
            });
          },
          3824: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            var $sort = [].sort;
            exportTypedArrayMethod("sort", function sort2(comparefn) {
              return $sort.call(aTypedArray(this), comparefn);
            });
          },
          5021: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var ArrayBufferViewCore = __webpack_require__2(260);
            var toLength = __webpack_require__2(7466);
            var toAbsoluteIndex = __webpack_require__2(1400);
            var speciesConstructor = __webpack_require__2(6707);
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod("subarray", function subarray(begin, end) {
              var O = aTypedArray(this);
              var length = O.length;
              var beginIndex = toAbsoluteIndex(begin, length);
              return new (speciesConstructor(O, O.constructor))(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === void 0 ? length : toAbsoluteIndex(end, length)) - beginIndex));
            });
          },
          2974: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var global = __webpack_require__2(7854);
            var ArrayBufferViewCore = __webpack_require__2(260);
            var fails = __webpack_require__2(7293);
            var Int8Array2 = global.Int8Array;
            var aTypedArray = ArrayBufferViewCore.aTypedArray;
            var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
            var $toLocaleString = [].toLocaleString;
            var $slice = [].slice;
            var TO_LOCALE_STRING_BUG = !!Int8Array2 && fails(function() {
              $toLocaleString.call(new Int8Array2(1));
            });
            var FORCED = fails(function() {
              return [1, 2].toLocaleString() != new Int8Array2([1, 2]).toLocaleString();
            }) || !fails(function() {
              Int8Array2.prototype.toLocaleString.call([1, 2]);
            });
            exportTypedArrayMethod("toLocaleString", function toLocaleString() {
              return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
            }, FORCED);
          },
          5016: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var exportTypedArrayMethod = __webpack_require__2(260).exportTypedArrayMethod;
            var fails = __webpack_require__2(7293);
            var global = __webpack_require__2(7854);
            var Uint8Array2 = global.Uint8Array;
            var Uint8ArrayPrototype = Uint8Array2 && Uint8Array2.prototype || {};
            var arrayToString = [].toString;
            var arrayJoin = [].join;
            if (fails(function() {
              arrayToString.call({});
            })) {
              arrayToString = function toString() {
                return arrayJoin.call(this);
              };
            }
            var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;
            exportTypedArrayMethod("toString", arrayToString, IS_NOT_ARRAY_METHOD);
          },
          2472: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            var createTypedArrayConstructor = __webpack_require__2(9843);
            createTypedArrayConstructor("Uint8", function(init) {
              return function Uint8Array2(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
              };
            });
          },
          4747: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var DOMIterables = __webpack_require__2(8324);
            var forEach2 = __webpack_require__2(8533);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            for (var COLLECTION_NAME in DOMIterables) {
              var Collection = global[COLLECTION_NAME];
              var CollectionPrototype = Collection && Collection.prototype;
              if (CollectionPrototype && CollectionPrototype.forEach !== forEach2)
                try {
                  createNonEnumerableProperty(CollectionPrototype, "forEach", forEach2);
                } catch (error2) {
                  CollectionPrototype.forEach = forEach2;
                }
            }
          },
          3948: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var DOMIterables = __webpack_require__2(8324);
            var ArrayIteratorMethods = __webpack_require__2(6992);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var wellKnownSymbol = __webpack_require__2(5112);
            var ITERATOR = wellKnownSymbol("iterator");
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var ArrayValues = ArrayIteratorMethods.values;
            for (var COLLECTION_NAME in DOMIterables) {
              var Collection = global[COLLECTION_NAME];
              var CollectionPrototype = Collection && Collection.prototype;
              if (CollectionPrototype) {
                if (CollectionPrototype[ITERATOR] !== ArrayValues)
                  try {
                    createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
                  } catch (error2) {
                    CollectionPrototype[ITERATOR] = ArrayValues;
                  }
                if (!CollectionPrototype[TO_STRING_TAG]) {
                  createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
                }
                if (DOMIterables[COLLECTION_NAME])
                  for (var METHOD_NAME in ArrayIteratorMethods) {
                    if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
                      try {
                        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                      } catch (error2) {
                        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                      }
                  }
              }
            }
          },
          1637: function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            __webpack_require__2(6992);
            var $ = __webpack_require__2(2109);
            var getBuiltIn = __webpack_require__2(5005);
            var USE_NATIVE_URL = __webpack_require__2(590);
            var redefine = __webpack_require__2(1320);
            var redefineAll = __webpack_require__2(2248);
            var setToStringTag = __webpack_require__2(8003);
            var createIteratorConstructor = __webpack_require__2(4994);
            var InternalStateModule = __webpack_require__2(9909);
            var anInstance = __webpack_require__2(5787);
            var hasOwn = __webpack_require__2(6656);
            var bind = __webpack_require__2(9974);
            var classof = __webpack_require__2(648);
            var anObject = __webpack_require__2(9670);
            var isObject = __webpack_require__2(111);
            var create = __webpack_require__2(30);
            var createPropertyDescriptor = __webpack_require__2(9114);
            var getIterator = __webpack_require__2(8554);
            var getIteratorMethod = __webpack_require__2(1246);
            var wellKnownSymbol = __webpack_require__2(5112);
            var $fetch = getBuiltIn("fetch");
            var Headers = getBuiltIn("Headers");
            var ITERATOR = wellKnownSymbol("iterator");
            var URL_SEARCH_PARAMS = "URLSearchParams";
            var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + "Iterator";
            var setInternalState = InternalStateModule.set;
            var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
            var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
            var plus = /\+/g;
            var sequences = Array(4);
            var percentSequence = function(bytes) {
              return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp("((?:%[\\da-f]{2}){" + bytes + "})", "gi"));
            };
            var percentDecode = function(sequence) {
              try {
                return decodeURIComponent(sequence);
              } catch (error2) {
                return sequence;
              }
            };
            var deserialize = function(it) {
              var result = it.replace(plus, " ");
              var bytes = 4;
              try {
                return decodeURIComponent(result);
              } catch (error2) {
                while (bytes) {
                  result = result.replace(percentSequence(bytes--), percentDecode);
                }
                return result;
              }
            };
            var find2 = /[!'()~]|%20/g;
            var replace = {
              "!": "%21",
              "'": "%27",
              "(": "%28",
              ")": "%29",
              "~": "%7E",
              "%20": "+"
            };
            var replacer = function(match) {
              return replace[match];
            };
            var serialize = function(it) {
              return encodeURIComponent(it).replace(find2, replacer);
            };
            var parseSearchParams = function(result, query) {
              if (query) {
                var attributes = query.split("&");
                var index2 = 0;
                var attribute, entry;
                while (index2 < attributes.length) {
                  attribute = attributes[index2++];
                  if (attribute.length) {
                    entry = attribute.split("=");
                    result.push({
                      key: deserialize(entry.shift()),
                      value: deserialize(entry.join("="))
                    });
                  }
                }
              }
            };
            var updateSearchParams = function(query) {
              this.entries.length = 0;
              parseSearchParams(this.entries, query);
            };
            var validateArgumentsLength = function(passed, required) {
              if (passed < required)
                throw TypeError("Not enough arguments");
            };
            var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
              setInternalState(this, {
                type: URL_SEARCH_PARAMS_ITERATOR,
                iterator: getIterator(getInternalParamsState(params).entries),
                kind
              });
            }, "Iterator", function next() {
              var state = getInternalIteratorState(this);
              var kind = state.kind;
              var step = state.iterator.next();
              var entry = step.value;
              if (!step.done) {
                step.value = kind === "keys" ? entry.key : kind === "values" ? entry.value : [entry.key, entry.value];
              }
              return step;
            });
            var URLSearchParamsConstructor = function URLSearchParams2() {
              anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
              var init = arguments.length > 0 ? arguments[0] : void 0;
              var that = this;
              var entries = [];
              var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;
              setInternalState(that, {
                type: URL_SEARCH_PARAMS,
                entries,
                updateURL: function() {
                },
                updateSearchParams
              });
              if (init !== void 0) {
                if (isObject(init)) {
                  iteratorMethod = getIteratorMethod(init);
                  if (typeof iteratorMethod === "function") {
                    iterator = iteratorMethod.call(init);
                    next = iterator.next;
                    while (!(step = next.call(iterator)).done) {
                      entryIterator = getIterator(anObject(step.value));
                      entryNext = entryIterator.next;
                      if ((first = entryNext.call(entryIterator)).done || (second = entryNext.call(entryIterator)).done || !entryNext.call(entryIterator).done)
                        throw TypeError("Expected sequence with length 2");
                      entries.push({ key: first.value + "", value: second.value + "" });
                    }
                  } else
                    for (key in init)
                      if (hasOwn(init, key))
                        entries.push({ key, value: init[key] + "" });
                } else {
                  parseSearchParams(entries, typeof init === "string" ? init.charAt(0) === "?" ? init.slice(1) : init : init + "");
                }
              }
            };
            var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
            redefineAll(URLSearchParamsPrototype, {
              append: function append(name, value) {
                validateArgumentsLength(arguments.length, 2);
                var state = getInternalParamsState(this);
                state.entries.push({ key: name + "", value: value + "" });
                state.updateURL();
              },
              "delete": function(name) {
                validateArgumentsLength(arguments.length, 1);
                var state = getInternalParamsState(this);
                var entries = state.entries;
                var key = name + "";
                var index2 = 0;
                while (index2 < entries.length) {
                  if (entries[index2].key === key)
                    entries.splice(index2, 1);
                  else
                    index2++;
                }
                state.updateURL();
              },
              get: function get2(name) {
                validateArgumentsLength(arguments.length, 1);
                var entries = getInternalParamsState(this).entries;
                var key = name + "";
                var index2 = 0;
                for (; index2 < entries.length; index2++) {
                  if (entries[index2].key === key)
                    return entries[index2].value;
                }
                return null;
              },
              getAll: function getAll(name) {
                validateArgumentsLength(arguments.length, 1);
                var entries = getInternalParamsState(this).entries;
                var key = name + "";
                var result = [];
                var index2 = 0;
                for (; index2 < entries.length; index2++) {
                  if (entries[index2].key === key)
                    result.push(entries[index2].value);
                }
                return result;
              },
              has: function has(name) {
                validateArgumentsLength(arguments.length, 1);
                var entries = getInternalParamsState(this).entries;
                var key = name + "";
                var index2 = 0;
                while (index2 < entries.length) {
                  if (entries[index2++].key === key)
                    return true;
                }
                return false;
              },
              set: function set(name, value) {
                validateArgumentsLength(arguments.length, 1);
                var state = getInternalParamsState(this);
                var entries = state.entries;
                var found = false;
                var key = name + "";
                var val = value + "";
                var index2 = 0;
                var entry;
                for (; index2 < entries.length; index2++) {
                  entry = entries[index2];
                  if (entry.key === key) {
                    if (found)
                      entries.splice(index2--, 1);
                    else {
                      found = true;
                      entry.value = val;
                    }
                  }
                }
                if (!found)
                  entries.push({ key, value: val });
                state.updateURL();
              },
              sort: function sort2() {
                var state = getInternalParamsState(this);
                var entries = state.entries;
                var slice = entries.slice();
                var entry, entriesIndex, sliceIndex;
                entries.length = 0;
                for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
                  entry = slice[sliceIndex];
                  for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
                    if (entries[entriesIndex].key > entry.key) {
                      entries.splice(entriesIndex, 0, entry);
                      break;
                    }
                  }
                  if (entriesIndex === sliceIndex)
                    entries.push(entry);
                }
                state.updateURL();
              },
              forEach: function forEach2(callback) {
                var entries = getInternalParamsState(this).entries;
                var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : void 0, 3);
                var index2 = 0;
                var entry;
                while (index2 < entries.length) {
                  entry = entries[index2++];
                  boundFunction(entry.value, entry.key, this);
                }
              },
              keys: function keys() {
                return new URLSearchParamsIterator(this, "keys");
              },
              values: function values() {
                return new URLSearchParamsIterator(this, "values");
              },
              entries: function entries() {
                return new URLSearchParamsIterator(this, "entries");
              }
            }, { enumerable: true });
            redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);
            redefine(URLSearchParamsPrototype, "toString", function toString() {
              var entries = getInternalParamsState(this).entries;
              var result = [];
              var index2 = 0;
              var entry;
              while (index2 < entries.length) {
                entry = entries[index2++];
                result.push(serialize(entry.key) + "=" + serialize(entry.value));
              }
              return result.join("&");
            }, { enumerable: true });
            setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
            $({ global: true, forced: !USE_NATIVE_URL }, {
              URLSearchParams: URLSearchParamsConstructor
            });
            if (!USE_NATIVE_URL && typeof $fetch == "function" && typeof Headers == "function") {
              $({ global: true, enumerable: true, forced: true }, {
                fetch: function fetch2(input) {
                  var args = [input];
                  var init, body, headers;
                  if (arguments.length > 1) {
                    init = arguments[1];
                    if (isObject(init)) {
                      body = init.body;
                      if (classof(body) === URL_SEARCH_PARAMS) {
                        headers = init.headers ? new Headers(init.headers) : new Headers();
                        if (!headers.has("content-type")) {
                          headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                        }
                        init = create(init, {
                          body: createPropertyDescriptor(0, String(body)),
                          headers: createPropertyDescriptor(0, headers)
                        });
                      }
                    }
                    args.push(init);
                  }
                  return $fetch.apply(this, args);
                }
              });
            }
            module2.exports = {
              URLSearchParams: URLSearchParamsConstructor,
              getState: getInternalParamsState
            };
          },
          285: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            __webpack_require__2(8783);
            var $ = __webpack_require__2(2109);
            var DESCRIPTORS = __webpack_require__2(9781);
            var USE_NATIVE_URL = __webpack_require__2(590);
            var global = __webpack_require__2(7854);
            var defineProperties = __webpack_require__2(6048);
            var redefine = __webpack_require__2(1320);
            var anInstance = __webpack_require__2(5787);
            var has = __webpack_require__2(6656);
            var assign = __webpack_require__2(1574);
            var arrayFrom = __webpack_require__2(8457);
            var codeAt = __webpack_require__2(8710).codeAt;
            var toASCII2 = __webpack_require__2(3197);
            var setToStringTag = __webpack_require__2(8003);
            var URLSearchParamsModule = __webpack_require__2(1637);
            var InternalStateModule = __webpack_require__2(9909);
            var NativeURL = global.URL;
            var URLSearchParams2 = URLSearchParamsModule.URLSearchParams;
            var getInternalSearchParamsState = URLSearchParamsModule.getState;
            var setInternalState = InternalStateModule.set;
            var getInternalURLState = InternalStateModule.getterFor("URL");
            var floor2 = Math.floor;
            var pow = Math.pow;
            var INVALID_AUTHORITY = "Invalid authority";
            var INVALID_SCHEME = "Invalid scheme";
            var INVALID_HOST = "Invalid host";
            var INVALID_PORT = "Invalid port";
            var ALPHA = /[A-Za-z]/;
            var ALPHANUMERIC = /[\d+-.A-Za-z]/;
            var DIGIT = /\d/;
            var HEX_START = /^(0x|0X)/;
            var OCT = /^[0-7]+$/;
            var DEC = /^\d+$/;
            var HEX = /^[\dA-Fa-f]+$/;
            var FORBIDDEN_HOST_CODE_POINT = /[\u0000\t\u000A\u000D #%/:?@[\\]]/;
            var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\t\u000A\u000D #/:?@[\\]]/;
            var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
            var TAB_AND_NEW_LINE = /[\t\u000A\u000D]/g;
            var EOF;
            var parseHost = function(url, input) {
              var result, codePoints, index2;
              if (input.charAt(0) == "[") {
                if (input.charAt(input.length - 1) != "]")
                  return INVALID_HOST;
                result = parseIPv6(input.slice(1, -1));
                if (!result)
                  return INVALID_HOST;
                url.host = result;
              } else if (!isSpecial(url)) {
                if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input))
                  return INVALID_HOST;
                result = "";
                codePoints = arrayFrom(input);
                for (index2 = 0; index2 < codePoints.length; index2++) {
                  result += percentEncode(codePoints[index2], C0ControlPercentEncodeSet);
                }
                url.host = result;
              } else {
                input = toASCII2(input);
                if (FORBIDDEN_HOST_CODE_POINT.test(input))
                  return INVALID_HOST;
                result = parseIPv4(input);
                if (result === null)
                  return INVALID_HOST;
                url.host = result;
              }
            };
            var parseIPv4 = function(input) {
              var parts = input.split(".");
              var partsLength, numbers, index2, part, radix, number, ipv4;
              if (parts.length && parts[parts.length - 1] == "") {
                parts.pop();
              }
              partsLength = parts.length;
              if (partsLength > 4)
                return input;
              numbers = [];
              for (index2 = 0; index2 < partsLength; index2++) {
                part = parts[index2];
                if (part == "")
                  return input;
                radix = 10;
                if (part.length > 1 && part.charAt(0) == "0") {
                  radix = HEX_START.test(part) ? 16 : 8;
                  part = part.slice(radix == 8 ? 1 : 2);
                }
                if (part === "") {
                  number = 0;
                } else {
                  if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part))
                    return input;
                  number = parseInt(part, radix);
                }
                numbers.push(number);
              }
              for (index2 = 0; index2 < partsLength; index2++) {
                number = numbers[index2];
                if (index2 == partsLength - 1) {
                  if (number >= pow(256, 5 - partsLength))
                    return null;
                } else if (number > 255)
                  return null;
              }
              ipv4 = numbers.pop();
              for (index2 = 0; index2 < numbers.length; index2++) {
                ipv4 += numbers[index2] * pow(256, 3 - index2);
              }
              return ipv4;
            };
            var parseIPv6 = function(input) {
              var address = [0, 0, 0, 0, 0, 0, 0, 0];
              var pieceIndex = 0;
              var compress = null;
              var pointer = 0;
              var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
              var char = function() {
                return input.charAt(pointer);
              };
              if (char() == ":") {
                if (input.charAt(1) != ":")
                  return;
                pointer += 2;
                pieceIndex++;
                compress = pieceIndex;
              }
              while (char()) {
                if (pieceIndex == 8)
                  return;
                if (char() == ":") {
                  if (compress !== null)
                    return;
                  pointer++;
                  pieceIndex++;
                  compress = pieceIndex;
                  continue;
                }
                value = length = 0;
                while (length < 4 && HEX.test(char())) {
                  value = value * 16 + parseInt(char(), 16);
                  pointer++;
                  length++;
                }
                if (char() == ".") {
                  if (length == 0)
                    return;
                  pointer -= length;
                  if (pieceIndex > 6)
                    return;
                  numbersSeen = 0;
                  while (char()) {
                    ipv4Piece = null;
                    if (numbersSeen > 0) {
                      if (char() == "." && numbersSeen < 4)
                        pointer++;
                      else
                        return;
                    }
                    if (!DIGIT.test(char()))
                      return;
                    while (DIGIT.test(char())) {
                      number = parseInt(char(), 10);
                      if (ipv4Piece === null)
                        ipv4Piece = number;
                      else if (ipv4Piece == 0)
                        return;
                      else
                        ipv4Piece = ipv4Piece * 10 + number;
                      if (ipv4Piece > 255)
                        return;
                      pointer++;
                    }
                    address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
                    numbersSeen++;
                    if (numbersSeen == 2 || numbersSeen == 4)
                      pieceIndex++;
                  }
                  if (numbersSeen != 4)
                    return;
                  break;
                } else if (char() == ":") {
                  pointer++;
                  if (!char())
                    return;
                } else if (char())
                  return;
                address[pieceIndex++] = value;
              }
              if (compress !== null) {
                swaps = pieceIndex - compress;
                pieceIndex = 7;
                while (pieceIndex != 0 && swaps > 0) {
                  swap = address[pieceIndex];
                  address[pieceIndex--] = address[compress + swaps - 1];
                  address[compress + --swaps] = swap;
                }
              } else if (pieceIndex != 8)
                return;
              return address;
            };
            var findLongestZeroSequence = function(ipv6) {
              var maxIndex = null;
              var maxLength = 1;
              var currStart = null;
              var currLength = 0;
              var index2 = 0;
              for (; index2 < 8; index2++) {
                if (ipv6[index2] !== 0) {
                  if (currLength > maxLength) {
                    maxIndex = currStart;
                    maxLength = currLength;
                  }
                  currStart = null;
                  currLength = 0;
                } else {
                  if (currStart === null)
                    currStart = index2;
                  ++currLength;
                }
              }
              if (currLength > maxLength) {
                maxIndex = currStart;
                maxLength = currLength;
              }
              return maxIndex;
            };
            var serializeHost = function(host) {
              var result, index2, compress, ignore0;
              if (typeof host == "number") {
                result = [];
                for (index2 = 0; index2 < 4; index2++) {
                  result.unshift(host % 256);
                  host = floor2(host / 256);
                }
                return result.join(".");
              } else if (typeof host == "object") {
                result = "";
                compress = findLongestZeroSequence(host);
                for (index2 = 0; index2 < 8; index2++) {
                  if (ignore0 && host[index2] === 0)
                    continue;
                  if (ignore0)
                    ignore0 = false;
                  if (compress === index2) {
                    result += index2 ? ":" : "::";
                    ignore0 = true;
                  } else {
                    result += host[index2].toString(16);
                    if (index2 < 7)
                      result += ":";
                  }
                }
                return "[" + result + "]";
              }
              return host;
            };
            var C0ControlPercentEncodeSet = {};
            var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
              " ": 1,
              '"': 1,
              "<": 1,
              ">": 1,
              "`": 1
            });
            var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
              "#": 1,
              "?": 1,
              "{": 1,
              "}": 1
            });
            var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
              "/": 1,
              ":": 1,
              ";": 1,
              "=": 1,
              "@": 1,
              "[": 1,
              "\\": 1,
              "]": 1,
              "^": 1,
              "|": 1
            });
            var percentEncode = function(char, set) {
              var code = codeAt(char, 0);
              return code > 32 && code < 127 && !has(set, char) ? char : encodeURIComponent(char);
            };
            var specialSchemes = {
              ftp: 21,
              file: null,
              http: 80,
              https: 443,
              ws: 80,
              wss: 443
            };
            var isSpecial = function(url) {
              return has(specialSchemes, url.scheme);
            };
            var includesCredentials = function(url) {
              return url.username != "" || url.password != "";
            };
            var cannotHaveUsernamePasswordPort = function(url) {
              return !url.host || url.cannotBeABaseURL || url.scheme == "file";
            };
            var isWindowsDriveLetter = function(string, normalized) {
              var second;
              return string.length == 2 && ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ":" || !normalized && second == "|");
            };
            var startsWithWindowsDriveLetter = function(string) {
              var third;
              return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || ((third = string.charAt(2)) === "/" || third === "\\" || third === "?" || third === "#"));
            };
            var shortenURLsPath = function(url) {
              var path = url.path;
              var pathSize = path.length;
              if (pathSize && (url.scheme != "file" || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
                path.pop();
              }
            };
            var isSingleDot = function(segment) {
              return segment === "." || segment.toLowerCase() === "%2e";
            };
            var isDoubleDot = function(segment) {
              segment = segment.toLowerCase();
              return segment === ".." || segment === "%2e." || segment === ".%2e" || segment === "%2e%2e";
            };
            var SCHEME_START = {};
            var SCHEME = {};
            var NO_SCHEME = {};
            var SPECIAL_RELATIVE_OR_AUTHORITY = {};
            var PATH_OR_AUTHORITY = {};
            var RELATIVE = {};
            var RELATIVE_SLASH = {};
            var SPECIAL_AUTHORITY_SLASHES = {};
            var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
            var AUTHORITY = {};
            var HOST = {};
            var HOSTNAME = {};
            var PORT = {};
            var FILE = {};
            var FILE_SLASH = {};
            var FILE_HOST = {};
            var PATH_START = {};
            var PATH = {};
            var CANNOT_BE_A_BASE_URL_PATH = {};
            var QUERY = {};
            var FRAGMENT = {};
            var parseURL = function(url, input, stateOverride, base2) {
              var state = stateOverride || SCHEME_START;
              var pointer = 0;
              var buffer = "";
              var seenAt = false;
              var seenBracket = false;
              var seenPasswordToken = false;
              var codePoints, char, bufferCodePoints, failure;
              if (!stateOverride) {
                url.scheme = "";
                url.username = "";
                url.password = "";
                url.host = null;
                url.port = null;
                url.path = [];
                url.query = null;
                url.fragment = null;
                url.cannotBeABaseURL = false;
                input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, "");
              }
              input = input.replace(TAB_AND_NEW_LINE, "");
              codePoints = arrayFrom(input);
              while (pointer <= codePoints.length) {
                char = codePoints[pointer];
                switch (state) {
                  case SCHEME_START:
                    if (char && ALPHA.test(char)) {
                      buffer += char.toLowerCase();
                      state = SCHEME;
                    } else if (!stateOverride) {
                      state = NO_SCHEME;
                      continue;
                    } else
                      return INVALID_SCHEME;
                    break;
                  case SCHEME:
                    if (char && (ALPHANUMERIC.test(char) || char == "+" || char == "-" || char == ".")) {
                      buffer += char.toLowerCase();
                    } else if (char == ":") {
                      if (stateOverride && (isSpecial(url) != has(specialSchemes, buffer) || buffer == "file" && (includesCredentials(url) || url.port !== null) || url.scheme == "file" && !url.host))
                        return;
                      url.scheme = buffer;
                      if (stateOverride) {
                        if (isSpecial(url) && specialSchemes[url.scheme] == url.port)
                          url.port = null;
                        return;
                      }
                      buffer = "";
                      if (url.scheme == "file") {
                        state = FILE;
                      } else if (isSpecial(url) && base2 && base2.scheme == url.scheme) {
                        state = SPECIAL_RELATIVE_OR_AUTHORITY;
                      } else if (isSpecial(url)) {
                        state = SPECIAL_AUTHORITY_SLASHES;
                      } else if (codePoints[pointer + 1] == "/") {
                        state = PATH_OR_AUTHORITY;
                        pointer++;
                      } else {
                        url.cannotBeABaseURL = true;
                        url.path.push("");
                        state = CANNOT_BE_A_BASE_URL_PATH;
                      }
                    } else if (!stateOverride) {
                      buffer = "";
                      state = NO_SCHEME;
                      pointer = 0;
                      continue;
                    } else
                      return INVALID_SCHEME;
                    break;
                  case NO_SCHEME:
                    if (!base2 || base2.cannotBeABaseURL && char != "#")
                      return INVALID_SCHEME;
                    if (base2.cannotBeABaseURL && char == "#") {
                      url.scheme = base2.scheme;
                      url.path = base2.path.slice();
                      url.query = base2.query;
                      url.fragment = "";
                      url.cannotBeABaseURL = true;
                      state = FRAGMENT;
                      break;
                    }
                    state = base2.scheme == "file" ? FILE : RELATIVE;
                    continue;
                  case SPECIAL_RELATIVE_OR_AUTHORITY:
                    if (char == "/" && codePoints[pointer + 1] == "/") {
                      state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                      pointer++;
                    } else {
                      state = RELATIVE;
                      continue;
                    }
                    break;
                  case PATH_OR_AUTHORITY:
                    if (char == "/") {
                      state = AUTHORITY;
                      break;
                    } else {
                      state = PATH;
                      continue;
                    }
                  case RELATIVE:
                    url.scheme = base2.scheme;
                    if (char == EOF) {
                      url.username = base2.username;
                      url.password = base2.password;
                      url.host = base2.host;
                      url.port = base2.port;
                      url.path = base2.path.slice();
                      url.query = base2.query;
                    } else if (char == "/" || char == "\\" && isSpecial(url)) {
                      state = RELATIVE_SLASH;
                    } else if (char == "?") {
                      url.username = base2.username;
                      url.password = base2.password;
                      url.host = base2.host;
                      url.port = base2.port;
                      url.path = base2.path.slice();
                      url.query = "";
                      state = QUERY;
                    } else if (char == "#") {
                      url.username = base2.username;
                      url.password = base2.password;
                      url.host = base2.host;
                      url.port = base2.port;
                      url.path = base2.path.slice();
                      url.query = base2.query;
                      url.fragment = "";
                      state = FRAGMENT;
                    } else {
                      url.username = base2.username;
                      url.password = base2.password;
                      url.host = base2.host;
                      url.port = base2.port;
                      url.path = base2.path.slice();
                      url.path.pop();
                      state = PATH;
                      continue;
                    }
                    break;
                  case RELATIVE_SLASH:
                    if (isSpecial(url) && (char == "/" || char == "\\")) {
                      state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                    } else if (char == "/") {
                      state = AUTHORITY;
                    } else {
                      url.username = base2.username;
                      url.password = base2.password;
                      url.host = base2.host;
                      url.port = base2.port;
                      state = PATH;
                      continue;
                    }
                    break;
                  case SPECIAL_AUTHORITY_SLASHES:
                    state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                    if (char != "/" || buffer.charAt(pointer + 1) != "/")
                      continue;
                    pointer++;
                    break;
                  case SPECIAL_AUTHORITY_IGNORE_SLASHES:
                    if (char != "/" && char != "\\") {
                      state = AUTHORITY;
                      continue;
                    }
                    break;
                  case AUTHORITY:
                    if (char == "@") {
                      if (seenAt)
                        buffer = "%40" + buffer;
                      seenAt = true;
                      bufferCodePoints = arrayFrom(buffer);
                      for (var i = 0; i < bufferCodePoints.length; i++) {
                        var codePoint = bufferCodePoints[i];
                        if (codePoint == ":" && !seenPasswordToken) {
                          seenPasswordToken = true;
                          continue;
                        }
                        var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                        if (seenPasswordToken)
                          url.password += encodedCodePoints;
                        else
                          url.username += encodedCodePoints;
                      }
                      buffer = "";
                    } else if (char == EOF || char == "/" || char == "?" || char == "#" || char == "\\" && isSpecial(url)) {
                      if (seenAt && buffer == "")
                        return INVALID_AUTHORITY;
                      pointer -= arrayFrom(buffer).length + 1;
                      buffer = "";
                      state = HOST;
                    } else
                      buffer += char;
                    break;
                  case HOST:
                  case HOSTNAME:
                    if (stateOverride && url.scheme == "file") {
                      state = FILE_HOST;
                      continue;
                    } else if (char == ":" && !seenBracket) {
                      if (buffer == "")
                        return INVALID_HOST;
                      failure = parseHost(url, buffer);
                      if (failure)
                        return failure;
                      buffer = "";
                      state = PORT;
                      if (stateOverride == HOSTNAME)
                        return;
                    } else if (char == EOF || char == "/" || char == "?" || char == "#" || char == "\\" && isSpecial(url)) {
                      if (isSpecial(url) && buffer == "")
                        return INVALID_HOST;
                      if (stateOverride && buffer == "" && (includesCredentials(url) || url.port !== null))
                        return;
                      failure = parseHost(url, buffer);
                      if (failure)
                        return failure;
                      buffer = "";
                      state = PATH_START;
                      if (stateOverride)
                        return;
                      continue;
                    } else {
                      if (char == "[")
                        seenBracket = true;
                      else if (char == "]")
                        seenBracket = false;
                      buffer += char;
                    }
                    break;
                  case PORT:
                    if (DIGIT.test(char)) {
                      buffer += char;
                    } else if (char == EOF || char == "/" || char == "?" || char == "#" || char == "\\" && isSpecial(url) || stateOverride) {
                      if (buffer != "") {
                        var port = parseInt(buffer, 10);
                        if (port > 65535)
                          return INVALID_PORT;
                        url.port = isSpecial(url) && port === specialSchemes[url.scheme] ? null : port;
                        buffer = "";
                      }
                      if (stateOverride)
                        return;
                      state = PATH_START;
                      continue;
                    } else
                      return INVALID_PORT;
                    break;
                  case FILE:
                    url.scheme = "file";
                    if (char == "/" || char == "\\")
                      state = FILE_SLASH;
                    else if (base2 && base2.scheme == "file") {
                      if (char == EOF) {
                        url.host = base2.host;
                        url.path = base2.path.slice();
                        url.query = base2.query;
                      } else if (char == "?") {
                        url.host = base2.host;
                        url.path = base2.path.slice();
                        url.query = "";
                        state = QUERY;
                      } else if (char == "#") {
                        url.host = base2.host;
                        url.path = base2.path.slice();
                        url.query = base2.query;
                        url.fragment = "";
                        state = FRAGMENT;
                      } else {
                        if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(""))) {
                          url.host = base2.host;
                          url.path = base2.path.slice();
                          shortenURLsPath(url);
                        }
                        state = PATH;
                        continue;
                      }
                    } else {
                      state = PATH;
                      continue;
                    }
                    break;
                  case FILE_SLASH:
                    if (char == "/" || char == "\\") {
                      state = FILE_HOST;
                      break;
                    }
                    if (base2 && base2.scheme == "file" && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(""))) {
                      if (isWindowsDriveLetter(base2.path[0], true))
                        url.path.push(base2.path[0]);
                      else
                        url.host = base2.host;
                    }
                    state = PATH;
                    continue;
                  case FILE_HOST:
                    if (char == EOF || char == "/" || char == "\\" || char == "?" || char == "#") {
                      if (!stateOverride && isWindowsDriveLetter(buffer)) {
                        state = PATH;
                      } else if (buffer == "") {
                        url.host = "";
                        if (stateOverride)
                          return;
                        state = PATH_START;
                      } else {
                        failure = parseHost(url, buffer);
                        if (failure)
                          return failure;
                        if (url.host == "localhost")
                          url.host = "";
                        if (stateOverride)
                          return;
                        buffer = "";
                        state = PATH_START;
                      }
                      continue;
                    } else
                      buffer += char;
                    break;
                  case PATH_START:
                    if (isSpecial(url)) {
                      state = PATH;
                      if (char != "/" && char != "\\")
                        continue;
                    } else if (!stateOverride && char == "?") {
                      url.query = "";
                      state = QUERY;
                    } else if (!stateOverride && char == "#") {
                      url.fragment = "";
                      state = FRAGMENT;
                    } else if (char != EOF) {
                      state = PATH;
                      if (char != "/")
                        continue;
                    }
                    break;
                  case PATH:
                    if (char == EOF || char == "/" || char == "\\" && isSpecial(url) || !stateOverride && (char == "?" || char == "#")) {
                      if (isDoubleDot(buffer)) {
                        shortenURLsPath(url);
                        if (char != "/" && !(char == "\\" && isSpecial(url))) {
                          url.path.push("");
                        }
                      } else if (isSingleDot(buffer)) {
                        if (char != "/" && !(char == "\\" && isSpecial(url))) {
                          url.path.push("");
                        }
                      } else {
                        if (url.scheme == "file" && !url.path.length && isWindowsDriveLetter(buffer)) {
                          if (url.host)
                            url.host = "";
                          buffer = buffer.charAt(0) + ":";
                        }
                        url.path.push(buffer);
                      }
                      buffer = "";
                      if (url.scheme == "file" && (char == EOF || char == "?" || char == "#")) {
                        while (url.path.length > 1 && url.path[0] === "") {
                          url.path.shift();
                        }
                      }
                      if (char == "?") {
                        url.query = "";
                        state = QUERY;
                      } else if (char == "#") {
                        url.fragment = "";
                        state = FRAGMENT;
                      }
                    } else {
                      buffer += percentEncode(char, pathPercentEncodeSet);
                    }
                    break;
                  case CANNOT_BE_A_BASE_URL_PATH:
                    if (char == "?") {
                      url.query = "";
                      state = QUERY;
                    } else if (char == "#") {
                      url.fragment = "";
                      state = FRAGMENT;
                    } else if (char != EOF) {
                      url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
                    }
                    break;
                  case QUERY:
                    if (!stateOverride && char == "#") {
                      url.fragment = "";
                      state = FRAGMENT;
                    } else if (char != EOF) {
                      if (char == "'" && isSpecial(url))
                        url.query += "%27";
                      else if (char == "#")
                        url.query += "%23";
                      else
                        url.query += percentEncode(char, C0ControlPercentEncodeSet);
                    }
                    break;
                  case FRAGMENT:
                    if (char != EOF)
                      url.fragment += percentEncode(char, fragmentPercentEncodeSet);
                    break;
                }
                pointer++;
              }
            };
            var URLConstructor = function URL2(url) {
              var that = anInstance(this, URLConstructor, "URL");
              var base2 = arguments.length > 1 ? arguments[1] : void 0;
              var urlString = String(url);
              var state = setInternalState(that, { type: "URL" });
              var baseState, failure;
              if (base2 !== void 0) {
                if (base2 instanceof URLConstructor)
                  baseState = getInternalURLState(base2);
                else {
                  failure = parseURL(baseState = {}, String(base2));
                  if (failure)
                    throw TypeError(failure);
                }
              }
              failure = parseURL(state, urlString, null, baseState);
              if (failure)
                throw TypeError(failure);
              var searchParams = state.searchParams = new URLSearchParams2();
              var searchParamsState = getInternalSearchParamsState(searchParams);
              searchParamsState.updateSearchParams(state.query);
              searchParamsState.updateURL = function() {
                state.query = String(searchParams) || null;
              };
              if (!DESCRIPTORS) {
                that.href = serializeURL.call(that);
                that.origin = getOrigin.call(that);
                that.protocol = getProtocol.call(that);
                that.username = getUsername.call(that);
                that.password = getPassword.call(that);
                that.host = getHost.call(that);
                that.hostname = getHostname.call(that);
                that.port = getPort.call(that);
                that.pathname = getPathname.call(that);
                that.search = getSearch.call(that);
                that.searchParams = getSearchParams.call(that);
                that.hash = getHash.call(that);
              }
            };
            var URLPrototype = URLConstructor.prototype;
            var serializeURL = function() {
              var url = getInternalURLState(this);
              var scheme = url.scheme;
              var username = url.username;
              var password = url.password;
              var host = url.host;
              var port = url.port;
              var path = url.path;
              var query = url.query;
              var fragment = url.fragment;
              var output = scheme + ":";
              if (host !== null) {
                output += "//";
                if (includesCredentials(url)) {
                  output += username + (password ? ":" + password : "") + "@";
                }
                output += serializeHost(host);
                if (port !== null)
                  output += ":" + port;
              } else if (scheme == "file")
                output += "//";
              output += url.cannotBeABaseURL ? path[0] : path.length ? "/" + path.join("/") : "";
              if (query !== null)
                output += "?" + query;
              if (fragment !== null)
                output += "#" + fragment;
              return output;
            };
            var getOrigin = function() {
              var url = getInternalURLState(this);
              var scheme = url.scheme;
              var port = url.port;
              if (scheme == "blob")
                try {
                  return new URL(scheme.path[0]).origin;
                } catch (error2) {
                  return "null";
                }
              if (scheme == "file" || !isSpecial(url))
                return "null";
              return scheme + "://" + serializeHost(url.host) + (port !== null ? ":" + port : "");
            };
            var getProtocol = function() {
              return getInternalURLState(this).scheme + ":";
            };
            var getUsername = function() {
              return getInternalURLState(this).username;
            };
            var getPassword = function() {
              return getInternalURLState(this).password;
            };
            var getHost = function() {
              var url = getInternalURLState(this);
              var host = url.host;
              var port = url.port;
              return host === null ? "" : port === null ? serializeHost(host) : serializeHost(host) + ":" + port;
            };
            var getHostname = function() {
              var host = getInternalURLState(this).host;
              return host === null ? "" : serializeHost(host);
            };
            var getPort = function() {
              var port = getInternalURLState(this).port;
              return port === null ? "" : String(port);
            };
            var getPathname = function() {
              var url = getInternalURLState(this);
              var path = url.path;
              return url.cannotBeABaseURL ? path[0] : path.length ? "/" + path.join("/") : "";
            };
            var getSearch = function() {
              var query = getInternalURLState(this).query;
              return query ? "?" + query : "";
            };
            var getSearchParams = function() {
              return getInternalURLState(this).searchParams;
            };
            var getHash = function() {
              var fragment = getInternalURLState(this).fragment;
              return fragment ? "#" + fragment : "";
            };
            var accessorDescriptor = function(getter, setter) {
              return { get: getter, set: setter, configurable: true, enumerable: true };
            };
            if (DESCRIPTORS) {
              defineProperties(URLPrototype, {
                href: accessorDescriptor(serializeURL, function(href) {
                  var url = getInternalURLState(this);
                  var urlString = String(href);
                  var failure = parseURL(url, urlString);
                  if (failure)
                    throw TypeError(failure);
                  getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
                }),
                origin: accessorDescriptor(getOrigin),
                protocol: accessorDescriptor(getProtocol, function(protocol) {
                  var url = getInternalURLState(this);
                  parseURL(url, String(protocol) + ":", SCHEME_START);
                }),
                username: accessorDescriptor(getUsername, function(username) {
                  var url = getInternalURLState(this);
                  var codePoints = arrayFrom(String(username));
                  if (cannotHaveUsernamePasswordPort(url))
                    return;
                  url.username = "";
                  for (var i = 0; i < codePoints.length; i++) {
                    url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
                  }
                }),
                password: accessorDescriptor(getPassword, function(password) {
                  var url = getInternalURLState(this);
                  var codePoints = arrayFrom(String(password));
                  if (cannotHaveUsernamePasswordPort(url))
                    return;
                  url.password = "";
                  for (var i = 0; i < codePoints.length; i++) {
                    url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
                  }
                }),
                host: accessorDescriptor(getHost, function(host) {
                  var url = getInternalURLState(this);
                  if (url.cannotBeABaseURL)
                    return;
                  parseURL(url, String(host), HOST);
                }),
                hostname: accessorDescriptor(getHostname, function(hostname) {
                  var url = getInternalURLState(this);
                  if (url.cannotBeABaseURL)
                    return;
                  parseURL(url, String(hostname), HOSTNAME);
                }),
                port: accessorDescriptor(getPort, function(port) {
                  var url = getInternalURLState(this);
                  if (cannotHaveUsernamePasswordPort(url))
                    return;
                  port = String(port);
                  if (port == "")
                    url.port = null;
                  else
                    parseURL(url, port, PORT);
                }),
                pathname: accessorDescriptor(getPathname, function(pathname) {
                  var url = getInternalURLState(this);
                  if (url.cannotBeABaseURL)
                    return;
                  url.path = [];
                  parseURL(url, pathname + "", PATH_START);
                }),
                search: accessorDescriptor(getSearch, function(search) {
                  var url = getInternalURLState(this);
                  search = String(search);
                  if (search == "") {
                    url.query = null;
                  } else {
                    if (search.charAt(0) == "?")
                      search = search.slice(1);
                    url.query = "";
                    parseURL(url, search, QUERY);
                  }
                  getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
                }),
                searchParams: accessorDescriptor(getSearchParams),
                hash: accessorDescriptor(getHash, function(hash) {
                  var url = getInternalURLState(this);
                  hash = String(hash);
                  if (hash == "") {
                    url.fragment = null;
                    return;
                  }
                  if (hash.charAt(0) == "#")
                    hash = hash.slice(1);
                  url.fragment = "";
                  parseURL(url, hash, FRAGMENT);
                })
              });
            }
            redefine(URLPrototype, "toJSON", function toJSON() {
              return serializeURL.call(this);
            }, { enumerable: true });
            redefine(URLPrototype, "toString", function toString() {
              return serializeURL.call(this);
            }, { enumerable: true });
            if (NativeURL) {
              var nativeCreateObjectURL = NativeURL.createObjectURL;
              var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
              if (nativeCreateObjectURL)
                redefine(URLConstructor, "createObjectURL", function createObjectURL(blob) {
                  return nativeCreateObjectURL.apply(NativeURL, arguments);
                });
              if (nativeRevokeObjectURL)
                redefine(URLConstructor, "revokeObjectURL", function revokeObjectURL(url) {
                  return nativeRevokeObjectURL.apply(NativeURL, arguments);
                });
            }
            setToStringTag(URLConstructor, "URL");
            $({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
              URL: URLConstructor
            });
          }
        };
        var __webpack_module_cache__ = {};
        function __webpack_require__(moduleId) {
          if (__webpack_module_cache__[moduleId]) {
            return __webpack_module_cache__[moduleId].exports;
          }
          var module2 = __webpack_module_cache__[moduleId] = {
            exports: {}
          };
          __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
          return module2.exports;
        }
        !function() {
          __webpack_require__.d = function(exports2, definition) {
            for (var key in definition) {
              if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
              }
            }
          };
        }();
        !function() {
          __webpack_require__.g = function() {
            if (typeof globalThis === "object")
              return globalThis;
            try {
              return this || new Function("return this")();
            } catch (e) {
              if (typeof window === "object")
                return window;
            }
          }();
        }();
        !function() {
          __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          };
        }();
        !function() {
          __webpack_require__.r = function(exports2) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
        }();
        var __webpack_exports__ = {};
        !function() {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_require__.d(__webpack_exports__, {
            "Dropzone": function() {
              return Dropzone2;
            },
            "default": function() {
              return dropzone_dist;
            }
          });
          var es_array_concat = __webpack_require__(2222);
          var es_array_filter = __webpack_require__(7327);
          var es_array_index_of = __webpack_require__(2772);
          var es_array_iterator = __webpack_require__(6992);
          var es_array_map = __webpack_require__(1249);
          var es_array_slice = __webpack_require__(7042);
          var es_array_splice = __webpack_require__(561);
          var es_array_buffer_constructor = __webpack_require__(8264);
          var es_function_name = __webpack_require__(8309);
          var es_object_get_prototype_of = __webpack_require__(489);
          var es_object_to_string = __webpack_require__(1539);
          var es_regexp_exec = __webpack_require__(4916);
          var es_regexp_to_string = __webpack_require__(9714);
          var es_string_iterator = __webpack_require__(8783);
          var es_string_match = __webpack_require__(4723);
          var es_string_replace = __webpack_require__(5306);
          var es_string_split = __webpack_require__(3123);
          var es_string_trim = __webpack_require__(3210);
          var es_typed_array_uint8_array = __webpack_require__(2472);
          var es_typed_array_copy_within = __webpack_require__(2990);
          var es_typed_array_every = __webpack_require__(8927);
          var es_typed_array_fill = __webpack_require__(3105);
          var es_typed_array_filter = __webpack_require__(5035);
          var es_typed_array_find = __webpack_require__(4345);
          var es_typed_array_find_index = __webpack_require__(7174);
          var es_typed_array_for_each = __webpack_require__(2846);
          var es_typed_array_includes = __webpack_require__(4731);
          var es_typed_array_index_of = __webpack_require__(7209);
          var es_typed_array_iterator = __webpack_require__(6319);
          var es_typed_array_join = __webpack_require__(8867);
          var es_typed_array_last_index_of = __webpack_require__(7789);
          var es_typed_array_map = __webpack_require__(3739);
          var es_typed_array_reduce = __webpack_require__(9368);
          var es_typed_array_reduce_right = __webpack_require__(4483);
          var es_typed_array_reverse = __webpack_require__(2056);
          var es_typed_array_set = __webpack_require__(3462);
          var es_typed_array_slice = __webpack_require__(678);
          var es_typed_array_some = __webpack_require__(7462);
          var es_typed_array_sort = __webpack_require__(3824);
          var es_typed_array_subarray = __webpack_require__(5021);
          var es_typed_array_to_locale_string = __webpack_require__(2974);
          var es_typed_array_to_string = __webpack_require__(5016);
          var web_dom_collections_for_each = __webpack_require__(4747);
          var web_dom_collections_iterator = __webpack_require__(3948);
          var web_url = __webpack_require__(285);
          ;
          function _createForOfIteratorHelper(o, allowArrayLike) {
            var it;
            if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
              if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it)
                  o = it;
                var i = 0;
                var F = function F2() {
                };
                return { s: F, n: function n() {
                  if (i >= o.length)
                    return { done: true };
                  return { done: false, value: o[i++] };
                }, e: function e(_e) {
                  throw _e;
                }, f: F };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var normalCompletion = true, didErr = false, err;
            return { s: function s() {
              it = o[Symbol.iterator]();
            }, n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            }, e: function e(_e2) {
              didErr = true;
              err = _e2;
            }, f: function f() {
              try {
                if (!normalCompletion && it.return != null)
                  it.return();
              } finally {
                if (didErr)
                  throw err;
              }
            } };
          }
          function _unsupportedIterableToArray(o, minLen) {
            if (!o)
              return;
            if (typeof o === "string")
              return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor)
              n = o.constructor.name;
            if (n === "Map" || n === "Set")
              return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          }
          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length)
              len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              _defineProperties(Constructor, staticProps);
            return Constructor;
          }
          var Emitter = /* @__PURE__ */ function() {
            function Emitter2() {
              _classCallCheck(this, Emitter2);
            }
            _createClass(Emitter2, [{
              key: "on",
              value: function on2(event, fn) {
                this._callbacks = this._callbacks || {};
                if (!this._callbacks[event]) {
                  this._callbacks[event] = [];
                }
                this._callbacks[event].push(fn);
                return this;
              }
            }, {
              key: "emit",
              value: function emit2(event) {
                this._callbacks = this._callbacks || {};
                var callbacks = this._callbacks[event];
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                if (callbacks) {
                  var _iterator = _createForOfIteratorHelper(callbacks, true), _step;
                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                      var callback = _step.value;
                      callback.apply(this, args);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }
                if (this.element) {
                  this.element.dispatchEvent(this.makeEvent("dropzone:" + event, {
                    args
                  }));
                }
                return this;
              }
            }, {
              key: "makeEvent",
              value: function makeEvent(eventName, detail) {
                var params = {
                  bubbles: true,
                  cancelable: true,
                  detail
                };
                if (typeof window.CustomEvent === "function") {
                  return new CustomEvent(eventName, params);
                } else {
                  var evt = document.createEvent("CustomEvent");
                  evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
                  return evt;
                }
              }
            }, {
              key: "off",
              value: function off2(event, fn) {
                if (!this._callbacks || arguments.length === 0) {
                  this._callbacks = {};
                  return this;
                }
                var callbacks = this._callbacks[event];
                if (!callbacks) {
                  return this;
                }
                if (arguments.length === 1) {
                  delete this._callbacks[event];
                  return this;
                }
                for (var i = 0; i < callbacks.length; i++) {
                  var callback = callbacks[i];
                  if (callback === fn) {
                    callbacks.splice(i, 1);
                    break;
                  }
                }
                return this;
              }
            }]);
            return Emitter2;
          }();
          ;
          var code = '<div class="dz-preview dz-file-preview"> <div class="dz-image"><img data-dz-thumbnail/></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size></span></div> <div class="dz-filename"><span data-dz-name></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress></span> </div> <div class="dz-error-message"><span data-dz-errormessage></span></div> <div class="dz-success-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Check</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path> </g> </svg> </div> <div class="dz-error-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Error</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475"> <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path> </g> </g> </svg> </div> </div> ';
          var preview_template = code;
          ;
          function options_createForOfIteratorHelper(o, allowArrayLike) {
            var it;
            if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
              if (Array.isArray(o) || (it = options_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it)
                  o = it;
                var i = 0;
                var F = function F2() {
                };
                return { s: F, n: function n() {
                  if (i >= o.length)
                    return { done: true };
                  return { done: false, value: o[i++] };
                }, e: function e(_e) {
                  throw _e;
                }, f: F };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var normalCompletion = true, didErr = false, err;
            return { s: function s() {
              it = o[Symbol.iterator]();
            }, n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            }, e: function e(_e2) {
              didErr = true;
              err = _e2;
            }, f: function f() {
              try {
                if (!normalCompletion && it.return != null)
                  it.return();
              } finally {
                if (didErr)
                  throw err;
              }
            } };
          }
          function options_unsupportedIterableToArray(o, minLen) {
            if (!o)
              return;
            if (typeof o === "string")
              return options_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor)
              n = o.constructor.name;
            if (n === "Map" || n === "Set")
              return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return options_arrayLikeToArray(o, minLen);
          }
          function options_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length)
              len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }
          var defaultOptions = {
            url: null,
            method: "post",
            withCredentials: false,
            timeout: null,
            parallelUploads: 2,
            uploadMultiple: false,
            chunking: false,
            forceChunking: false,
            chunkSize: 2e6,
            parallelChunkUploads: false,
            retryChunks: false,
            retryChunksLimit: 3,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: true,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            thumbnailMethod: "crop",
            resizeWidth: null,
            resizeHeight: null,
            resizeMimeType: null,
            resizeQuality: 0.8,
            resizeMethod: "contain",
            filesizeBase: 1e3,
            maxFiles: null,
            headers: null,
            clickable: true,
            ignoreHiddenFiles: true,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: true,
            autoQueue: true,
            addRemoveLinks: false,
            previewsContainer: null,
            disablePreviews: false,
            hiddenInputContainer: "body",
            capture: null,
            renameFilename: null,
            renameFile: null,
            forceFallback: false,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictUploadCanceled: "Upload canceled.",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            dictFileSizeUnits: {
              tb: "TB",
              gb: "GB",
              mb: "MB",
              kb: "KB",
              b: "b"
            },
            init: function init() {
            },
            params: function params(files, xhr, chunk) {
              if (chunk) {
                return {
                  dzuuid: chunk.file.upload.uuid,
                  dzchunkindex: chunk.index,
                  dztotalfilesize: chunk.file.size,
                  dzchunksize: this.options.chunkSize,
                  dztotalchunkcount: chunk.file.upload.totalChunkCount,
                  dzchunkbyteoffset: chunk.index * this.options.chunkSize
                };
              }
            },
            accept: function accept(file, done) {
              return done();
            },
            chunksUploaded: function chunksUploaded(file, done) {
              done();
            },
            fallback: function fallback() {
              var messageElement;
              this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
              var _iterator = options_createForOfIteratorHelper(this.element.getElementsByTagName("div"), true), _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  var child = _step.value;
                  if (/(^| )dz-message($| )/.test(child.className)) {
                    messageElement = child;
                    child.className = "dz-message";
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              if (!messageElement) {
                messageElement = Dropzone2.createElement('<div class="dz-message"><span></span></div>');
                this.element.appendChild(messageElement);
              }
              var span = messageElement.getElementsByTagName("span")[0];
              if (span) {
                if (span.textContent != null) {
                  span.textContent = this.options.dictFallbackMessage;
                } else if (span.innerText != null) {
                  span.innerText = this.options.dictFallbackMessage;
                }
              }
              return this.element.appendChild(this.getFallbackForm());
            },
            resize: function resize(file, width, height, resizeMethod) {
              var info = {
                srcX: 0,
                srcY: 0,
                srcWidth: file.width,
                srcHeight: file.height
              };
              var srcRatio = file.width / file.height;
              if (width == null && height == null) {
                width = info.srcWidth;
                height = info.srcHeight;
              } else if (width == null) {
                width = height * srcRatio;
              } else if (height == null) {
                height = width / srcRatio;
              }
              width = Math.min(width, info.srcWidth);
              height = Math.min(height, info.srcHeight);
              var trgRatio = width / height;
              if (info.srcWidth > width || info.srcHeight > height) {
                if (resizeMethod === "crop") {
                  if (srcRatio > trgRatio) {
                    info.srcHeight = file.height;
                    info.srcWidth = info.srcHeight * trgRatio;
                  } else {
                    info.srcWidth = file.width;
                    info.srcHeight = info.srcWidth / trgRatio;
                  }
                } else if (resizeMethod === "contain") {
                  if (srcRatio > trgRatio) {
                    height = width / srcRatio;
                  } else {
                    width = height * srcRatio;
                  }
                } else {
                  throw new Error("Unknown resizeMethod '".concat(resizeMethod, "'"));
                }
              }
              info.srcX = (file.width - info.srcWidth) / 2;
              info.srcY = (file.height - info.srcHeight) / 2;
              info.trgWidth = width;
              info.trgHeight = height;
              return info;
            },
            transformFile: function transformFile(file, done) {
              if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
                return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
              } else {
                return done(file);
              }
            },
            previewTemplate: preview_template,
            drop: function drop4(e) {
              return this.element.classList.remove("dz-drag-hover");
            },
            dragstart: function dragstart(e) {
            },
            dragend: function dragend(e) {
              return this.element.classList.remove("dz-drag-hover");
            },
            dragenter: function dragenter(e) {
              return this.element.classList.add("dz-drag-hover");
            },
            dragover: function dragover(e) {
              return this.element.classList.add("dz-drag-hover");
            },
            dragleave: function dragleave(e) {
              return this.element.classList.remove("dz-drag-hover");
            },
            paste: function paste2(e) {
            },
            reset: function reset() {
              return this.element.classList.remove("dz-started");
            },
            addedfile: function addedfile(file) {
              var _this = this;
              if (this.element === this.previewsContainer) {
                this.element.classList.add("dz-started");
              }
              if (this.previewsContainer && !this.options.disablePreviews) {
                file.previewElement = Dropzone2.createElement(this.options.previewTemplate.trim());
                file.previewTemplate = file.previewElement;
                this.previewsContainer.appendChild(file.previewElement);
                var _iterator2 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-name]"), true), _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    var node = _step2.value;
                    node.textContent = file.name;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                var _iterator3 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-size]"), true), _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    node = _step3.value;
                    node.innerHTML = this.filesize(file.size);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                if (this.options.addRemoveLinks) {
                  file._removeLink = Dropzone2.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile, "</a>"));
                  file.previewElement.appendChild(file._removeLink);
                }
                var removeFileEvent = function removeFileEvent2(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  if (file.status === Dropzone2.UPLOADING) {
                    return Dropzone2.confirm(_this.options.dictCancelUploadConfirmation, function() {
                      return _this.removeFile(file);
                    });
                  } else {
                    if (_this.options.dictRemoveFileConfirmation) {
                      return Dropzone2.confirm(_this.options.dictRemoveFileConfirmation, function() {
                        return _this.removeFile(file);
                      });
                    } else {
                      return _this.removeFile(file);
                    }
                  }
                };
                var _iterator4 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-remove]"), true), _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                    var removeLink = _step4.value;
                    removeLink.addEventListener("click", removeFileEvent);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            },
            removedfile: function removedfile(file) {
              if (file.previewElement != null && file.previewElement.parentNode != null) {
                file.previewElement.parentNode.removeChild(file.previewElement);
              }
              return this._updateMaxFilesReachedClass();
            },
            thumbnail: function thumbnail(file, dataUrl) {
              if (file.previewElement) {
                file.previewElement.classList.remove("dz-file-preview");
                var _iterator5 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-thumbnail]"), true), _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                    var thumbnailElement = _step5.value;
                    thumbnailElement.alt = file.name;
                    thumbnailElement.src = dataUrl;
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
                return setTimeout(function() {
                  return file.previewElement.classList.add("dz-image-preview");
                }, 1);
              }
            },
            error: function error2(file, message) {
              if (file.previewElement) {
                file.previewElement.classList.add("dz-error");
                if (typeof message !== "string" && message.error) {
                  message = message.error;
                }
                var _iterator6 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-errormessage]"), true), _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                    var node = _step6.value;
                    node.textContent = message;
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
            },
            errormultiple: function errormultiple() {
            },
            processing: function processing(file) {
              if (file.previewElement) {
                file.previewElement.classList.add("dz-processing");
                if (file._removeLink) {
                  return file._removeLink.innerHTML = this.options.dictCancelUpload;
                }
              }
            },
            processingmultiple: function processingmultiple() {
            },
            uploadprogress: function uploadprogress(file, progress, bytesSent) {
              if (file.previewElement) {
                var _iterator7 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), true), _step7;
                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                    var node = _step7.value;
                    node.nodeName === "PROGRESS" ? node.value = progress : node.style.width = "".concat(progress, "%");
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }
            },
            totaluploadprogress: function totaluploadprogress() {
            },
            sending: function sending() {
            },
            sendingmultiple: function sendingmultiple() {
            },
            success: function success(file) {
              if (file.previewElement) {
                return file.previewElement.classList.add("dz-success");
              }
            },
            successmultiple: function successmultiple() {
            },
            canceled: function canceled(file) {
              return this.emit("error", file, this.options.dictUploadCanceled);
            },
            canceledmultiple: function canceledmultiple() {
            },
            complete: function complete(file) {
              if (file._removeLink) {
                file._removeLink.innerHTML = this.options.dictRemoveFile;
              }
              if (file.previewElement) {
                return file.previewElement.classList.add("dz-complete");
              }
            },
            completemultiple: function completemultiple() {
            },
            maxfilesexceeded: function maxfilesexceeded() {
            },
            maxfilesreached: function maxfilesreached() {
            },
            queuecomplete: function queuecomplete() {
            },
            addedfiles: function addedfiles() {
            }
          };
          var src_options = defaultOptions;
          ;
          function _typeof2(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof2 = function _typeof3(obj2) {
                return typeof obj2;
              };
            } else {
              _typeof2 = function _typeof3(obj2) {
                return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              };
            }
            return _typeof2(obj);
          }
          function dropzone_createForOfIteratorHelper(o, allowArrayLike) {
            var it;
            if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
              if (Array.isArray(o) || (it = dropzone_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it)
                  o = it;
                var i = 0;
                var F = function F2() {
                };
                return { s: F, n: function n() {
                  if (i >= o.length)
                    return { done: true };
                  return { done: false, value: o[i++] };
                }, e: function e(_e) {
                  throw _e;
                }, f: F };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var normalCompletion = true, didErr = false, err;
            return { s: function s() {
              it = o[Symbol.iterator]();
            }, n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            }, e: function e(_e2) {
              didErr = true;
              err = _e2;
            }, f: function f() {
              try {
                if (!normalCompletion && it.return != null)
                  it.return();
              } finally {
                if (didErr)
                  throw err;
              }
            } };
          }
          function dropzone_unsupportedIterableToArray(o, minLen) {
            if (!o)
              return;
            if (typeof o === "string")
              return dropzone_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor)
              n = o.constructor.name;
            if (n === "Map" || n === "Set")
              return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return dropzone_arrayLikeToArray(o, minLen);
          }
          function dropzone_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length)
              len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }
          function dropzone_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function dropzone_defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          function dropzone_createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              dropzone_defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              dropzone_defineProperties(Constructor, staticProps);
            return Constructor;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
            if (superClass)
              _setPrototypeOf(subClass, superClass);
          }
          function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
              o2.__proto__ = p2;
              return o2;
            };
            return _setPrototypeOf(o, p);
          }
          function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
              var Super = _getPrototypeOf(Derived), result;
              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
              } else {
                result = Super.apply(this, arguments);
              }
              return _possibleConstructorReturn(this, result);
            };
          }
          function _possibleConstructorReturn(self2, call) {
            if (call && (_typeof2(call) === "object" || typeof call === "function")) {
              return call;
            }
            return _assertThisInitialized(self2);
          }
          function _assertThisInitialized(self2) {
            if (self2 === void 0) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return self2;
          }
          function _isNativeReflectConstruct() {
            if (typeof Reflect === "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy === "function")
              return true;
            try {
              Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              }));
              return true;
            } catch (e) {
              return false;
            }
          }
          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
              return o2.__proto__ || Object.getPrototypeOf(o2);
            };
            return _getPrototypeOf(o);
          }
          var Dropzone2 = /* @__PURE__ */ function(_Emitter) {
            _inherits(Dropzone3, _Emitter);
            var _super = _createSuper(Dropzone3);
            function Dropzone3(el, options2) {
              var _this;
              dropzone_classCallCheck(this, Dropzone3);
              _this = _super.call(this);
              var fallback, left;
              _this.element = el;
              _this.version = Dropzone3.version;
              _this.clickableElements = [];
              _this.listeners = [];
              _this.files = [];
              if (typeof _this.element === "string") {
                _this.element = document.querySelector(_this.element);
              }
              if (!_this.element || _this.element.nodeType == null) {
                throw new Error("Invalid dropzone element.");
              }
              if (_this.element.dropzone) {
                throw new Error("Dropzone already attached.");
              }
              Dropzone3.instances.push(_assertThisInitialized(_this));
              _this.element.dropzone = _assertThisInitialized(_this);
              var elementOptions = (left = Dropzone3.optionsForElement(_this.element)) != null ? left : {};
              _this.options = Dropzone3.extend({}, src_options, elementOptions, options2 != null ? options2 : {});
              _this.options.previewTemplate = _this.options.previewTemplate.replace(/\n*/g, "");
              if (_this.options.forceFallback || !Dropzone3.isBrowserSupported()) {
                return _possibleConstructorReturn(_this, _this.options.fallback.call(_assertThisInitialized(_this)));
              }
              if (_this.options.url == null) {
                _this.options.url = _this.element.getAttribute("action");
              }
              if (!_this.options.url) {
                throw new Error("No URL provided.");
              }
              if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
                throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
              }
              if (_this.options.uploadMultiple && _this.options.chunking) {
                throw new Error("You cannot set both: uploadMultiple and chunking.");
              }
              if (_this.options.acceptedMimeTypes) {
                _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
                delete _this.options.acceptedMimeTypes;
              }
              if (_this.options.renameFilename != null) {
                _this.options.renameFile = function(file) {
                  return _this.options.renameFilename.call(_assertThisInitialized(_this), file.name, file);
                };
              }
              if (typeof _this.options.method === "string") {
                _this.options.method = _this.options.method.toUpperCase();
              }
              if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
                fallback.parentNode.removeChild(fallback);
              }
              if (_this.options.previewsContainer !== false) {
                if (_this.options.previewsContainer) {
                  _this.previewsContainer = Dropzone3.getElement(_this.options.previewsContainer, "previewsContainer");
                } else {
                  _this.previewsContainer = _this.element;
                }
              }
              if (_this.options.clickable) {
                if (_this.options.clickable === true) {
                  _this.clickableElements = [_this.element];
                } else {
                  _this.clickableElements = Dropzone3.getElements(_this.options.clickable, "clickable");
                }
              }
              _this.init();
              return _this;
            }
            dropzone_createClass(Dropzone3, [{
              key: "getAcceptedFiles",
              value: function getAcceptedFiles() {
                return this.files.filter(function(file) {
                  return file.accepted;
                }).map(function(file) {
                  return file;
                });
              }
            }, {
              key: "getRejectedFiles",
              value: function getRejectedFiles() {
                return this.files.filter(function(file) {
                  return !file.accepted;
                }).map(function(file) {
                  return file;
                });
              }
            }, {
              key: "getFilesWithStatus",
              value: function getFilesWithStatus(status) {
                return this.files.filter(function(file) {
                  return file.status === status;
                }).map(function(file) {
                  return file;
                });
              }
            }, {
              key: "getQueuedFiles",
              value: function getQueuedFiles() {
                return this.getFilesWithStatus(Dropzone3.QUEUED);
              }
            }, {
              key: "getUploadingFiles",
              value: function getUploadingFiles() {
                return this.getFilesWithStatus(Dropzone3.UPLOADING);
              }
            }, {
              key: "getAddedFiles",
              value: function getAddedFiles() {
                return this.getFilesWithStatus(Dropzone3.ADDED);
              }
            }, {
              key: "getActiveFiles",
              value: function getActiveFiles() {
                return this.files.filter(function(file) {
                  return file.status === Dropzone3.UPLOADING || file.status === Dropzone3.QUEUED;
                }).map(function(file) {
                  return file;
                });
              }
            }, {
              key: "init",
              value: function init() {
                var _this2 = this;
                if (this.element.tagName === "form") {
                  this.element.setAttribute("enctype", "multipart/form-data");
                }
                if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
                  this.element.appendChild(Dropzone3.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage, "</button></div>")));
                }
                if (this.clickableElements.length) {
                  var setupHiddenFileInput = function setupHiddenFileInput2() {
                    if (_this2.hiddenFileInput) {
                      _this2.hiddenFileInput.parentNode.removeChild(_this2.hiddenFileInput);
                    }
                    _this2.hiddenFileInput = document.createElement("input");
                    _this2.hiddenFileInput.setAttribute("type", "file");
                    if (_this2.options.maxFiles === null || _this2.options.maxFiles > 1) {
                      _this2.hiddenFileInput.setAttribute("multiple", "multiple");
                    }
                    _this2.hiddenFileInput.className = "dz-hidden-input";
                    if (_this2.options.acceptedFiles !== null) {
                      _this2.hiddenFileInput.setAttribute("accept", _this2.options.acceptedFiles);
                    }
                    if (_this2.options.capture !== null) {
                      _this2.hiddenFileInput.setAttribute("capture", _this2.options.capture);
                    }
                    _this2.hiddenFileInput.setAttribute("tabindex", "-1");
                    _this2.hiddenFileInput.style.visibility = "hidden";
                    _this2.hiddenFileInput.style.position = "absolute";
                    _this2.hiddenFileInput.style.top = "0";
                    _this2.hiddenFileInput.style.left = "0";
                    _this2.hiddenFileInput.style.height = "0";
                    _this2.hiddenFileInput.style.width = "0";
                    Dropzone3.getElement(_this2.options.hiddenInputContainer, "hiddenInputContainer").appendChild(_this2.hiddenFileInput);
                    _this2.hiddenFileInput.addEventListener("change", function() {
                      var files = _this2.hiddenFileInput.files;
                      if (files.length) {
                        var _iterator = dropzone_createForOfIteratorHelper(files, true), _step;
                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                            var file = _step.value;
                            _this2.addFile(file);
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }
                      }
                      _this2.emit("addedfiles", files);
                      setupHiddenFileInput2();
                    });
                  };
                  setupHiddenFileInput();
                }
                this.URL = window.URL !== null ? window.URL : window.webkitURL;
                var _iterator2 = dropzone_createForOfIteratorHelper(this.events, true), _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    var eventName = _step2.value;
                    this.on(eventName, this.options[eventName]);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                this.on("uploadprogress", function() {
                  return _this2.updateTotalUploadProgress();
                });
                this.on("removedfile", function() {
                  return _this2.updateTotalUploadProgress();
                });
                this.on("canceled", function(file) {
                  return _this2.emit("complete", file);
                });
                this.on("complete", function(file) {
                  if (_this2.getAddedFiles().length === 0 && _this2.getUploadingFiles().length === 0 && _this2.getQueuedFiles().length === 0) {
                    return setTimeout(function() {
                      return _this2.emit("queuecomplete");
                    }, 0);
                  }
                });
                var containsFiles = function containsFiles2(e) {
                  if (e.dataTransfer.types) {
                    for (var i = 0; i < e.dataTransfer.types.length; i++) {
                      if (e.dataTransfer.types[i] === "Files")
                        return true;
                    }
                  }
                  return false;
                };
                var noPropagation = function noPropagation2(e) {
                  if (!containsFiles(e))
                    return;
                  e.stopPropagation();
                  if (e.preventDefault) {
                    return e.preventDefault();
                  } else {
                    return e.returnValue = false;
                  }
                };
                this.listeners = [{
                  element: this.element,
                  events: {
                    dragstart: function dragstart(e) {
                      return _this2.emit("dragstart", e);
                    },
                    dragenter: function dragenter(e) {
                      noPropagation(e);
                      return _this2.emit("dragenter", e);
                    },
                    dragover: function dragover(e) {
                      var efct;
                      try {
                        efct = e.dataTransfer.effectAllowed;
                      } catch (error2) {
                      }
                      e.dataTransfer.dropEffect = efct === "move" || efct === "linkMove" ? "move" : "copy";
                      noPropagation(e);
                      return _this2.emit("dragover", e);
                    },
                    dragleave: function dragleave(e) {
                      return _this2.emit("dragleave", e);
                    },
                    drop: function drop4(e) {
                      noPropagation(e);
                      return _this2.drop(e);
                    },
                    dragend: function dragend(e) {
                      return _this2.emit("dragend", e);
                    }
                  }
                }];
                this.clickableElements.forEach(function(clickableElement) {
                  return _this2.listeners.push({
                    element: clickableElement,
                    events: {
                      click: function click(evt) {
                        if (clickableElement !== _this2.element || evt.target === _this2.element || Dropzone3.elementInside(evt.target, _this2.element.querySelector(".dz-message"))) {
                          _this2.hiddenFileInput.click();
                        }
                        return true;
                      }
                    }
                  });
                });
                this.enable();
                return this.options.init.call(this);
              }
            }, {
              key: "destroy",
              value: function destroy2() {
                this.disable();
                this.removeAllFiles(true);
                if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : void 0) {
                  this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                  this.hiddenFileInput = null;
                }
                delete this.element.dropzone;
                return Dropzone3.instances.splice(Dropzone3.instances.indexOf(this), 1);
              }
            }, {
              key: "updateTotalUploadProgress",
              value: function updateTotalUploadProgress() {
                var totalUploadProgress;
                var totalBytesSent = 0;
                var totalBytes = 0;
                var activeFiles = this.getActiveFiles();
                if (activeFiles.length) {
                  var _iterator3 = dropzone_createForOfIteratorHelper(this.getActiveFiles(), true), _step3;
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                      var file = _step3.value;
                      totalBytesSent += file.upload.bytesSent;
                      totalBytes += file.upload.total;
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                  totalUploadProgress = 100 * totalBytesSent / totalBytes;
                } else {
                  totalUploadProgress = 100;
                }
                return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
              }
            }, {
              key: "_getParamName",
              value: function _getParamName(n) {
                if (typeof this.options.paramName === "function") {
                  return this.options.paramName(n);
                } else {
                  return "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(n, "]") : "");
                }
              }
            }, {
              key: "_renameFile",
              value: function _renameFile(file) {
                if (typeof this.options.renameFile !== "function") {
                  return file.name;
                }
                return this.options.renameFile(file);
              }
            }, {
              key: "getFallbackForm",
              value: function getFallbackForm() {
                var existingFallback, form;
                if (existingFallback = this.getExistingFallback()) {
                  return existingFallback;
                }
                var fieldsString = '<div class="dz-fallback">';
                if (this.options.dictFallbackText) {
                  fieldsString += "<p>".concat(this.options.dictFallbackText, "</p>");
                }
                fieldsString += '<input type="file" name="'.concat(this._getParamName(0), '" ').concat(this.options.uploadMultiple ? 'multiple="multiple"' : void 0, ' /><input type="submit" value="Upload!"></div>');
                var fields = Dropzone3.createElement(fieldsString);
                if (this.element.tagName !== "FORM") {
                  form = Dropzone3.createElement('<form action="'.concat(this.options.url, '" enctype="multipart/form-data" method="').concat(this.options.method, '"></form>'));
                  form.appendChild(fields);
                } else {
                  this.element.setAttribute("enctype", "multipart/form-data");
                  this.element.setAttribute("method", this.options.method);
                }
                return form != null ? form : fields;
              }
            }, {
              key: "getExistingFallback",
              value: function getExistingFallback() {
                var getFallback = function getFallback2(elements) {
                  var _iterator4 = dropzone_createForOfIteratorHelper(elements, true), _step4;
                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                      var el = _step4.value;
                      if (/(^| )fallback($| )/.test(el.className)) {
                        return el;
                      }
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                };
                for (var _i = 0, _arr = ["div", "form"]; _i < _arr.length; _i++) {
                  var tagName = _arr[_i];
                  var fallback;
                  if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
                    return fallback;
                  }
                }
              }
            }, {
              key: "setupEventListeners",
              value: function setupEventListeners() {
                return this.listeners.map(function(elementListeners) {
                  return function() {
                    var result = [];
                    for (var event in elementListeners.events) {
                      var listener = elementListeners.events[event];
                      result.push(elementListeners.element.addEventListener(event, listener, false));
                    }
                    return result;
                  }();
                });
              }
            }, {
              key: "removeEventListeners",
              value: function removeEventListeners() {
                return this.listeners.map(function(elementListeners) {
                  return function() {
                    var result = [];
                    for (var event in elementListeners.events) {
                      var listener = elementListeners.events[event];
                      result.push(elementListeners.element.removeEventListener(event, listener, false));
                    }
                    return result;
                  }();
                });
              }
            }, {
              key: "disable",
              value: function disable() {
                var _this3 = this;
                this.clickableElements.forEach(function(element) {
                  return element.classList.remove("dz-clickable");
                });
                this.removeEventListeners();
                this.disabled = true;
                return this.files.map(function(file) {
                  return _this3.cancelUpload(file);
                });
              }
            }, {
              key: "enable",
              value: function enable() {
                delete this.disabled;
                this.clickableElements.forEach(function(element) {
                  return element.classList.add("dz-clickable");
                });
                return this.setupEventListeners();
              }
            }, {
              key: "filesize",
              value: function filesize(size) {
                var selectedSize = 0;
                var selectedUnit = "b";
                if (size > 0) {
                  var units = ["tb", "gb", "mb", "kb", "b"];
                  for (var i = 0; i < units.length; i++) {
                    var unit = units[i];
                    var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                    if (size >= cutoff) {
                      selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                      selectedUnit = unit;
                      break;
                    }
                  }
                  selectedSize = Math.round(10 * selectedSize) / 10;
                }
                return "<strong>".concat(selectedSize, "</strong> ").concat(this.options.dictFileSizeUnits[selectedUnit]);
              }
            }, {
              key: "_updateMaxFilesReachedClass",
              value: function _updateMaxFilesReachedClass() {
                if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                  if (this.getAcceptedFiles().length === this.options.maxFiles) {
                    this.emit("maxfilesreached", this.files);
                  }
                  return this.element.classList.add("dz-max-files-reached");
                } else {
                  return this.element.classList.remove("dz-max-files-reached");
                }
              }
            }, {
              key: "drop",
              value: function drop4(e) {
                if (!e.dataTransfer) {
                  return;
                }
                this.emit("drop", e);
                var files = [];
                for (var i = 0; i < e.dataTransfer.files.length; i++) {
                  files[i] = e.dataTransfer.files[i];
                }
                if (files.length) {
                  var items = e.dataTransfer.items;
                  if (items && items.length && items[0].webkitGetAsEntry != null) {
                    this._addFilesFromItems(items);
                  } else {
                    this.handleFiles(files);
                  }
                }
                this.emit("addedfiles", files);
              }
            }, {
              key: "paste",
              value: function paste2(e) {
                if (__guard__(e != null ? e.clipboardData : void 0, function(x) {
                  return x.items;
                }) == null) {
                  return;
                }
                this.emit("paste", e);
                var items = e.clipboardData.items;
                if (items.length) {
                  return this._addFilesFromItems(items);
                }
              }
            }, {
              key: "handleFiles",
              value: function handleFiles(files) {
                var _iterator5 = dropzone_createForOfIteratorHelper(files, true), _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                    var file = _step5.value;
                    this.addFile(file);
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
            }, {
              key: "_addFilesFromItems",
              value: function _addFilesFromItems(items) {
                var _this4 = this;
                return function() {
                  var result = [];
                  var _iterator6 = dropzone_createForOfIteratorHelper(items, true), _step6;
                  try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                      var item = _step6.value;
                      var entry;
                      if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
                        if (entry.isFile) {
                          result.push(_this4.addFile(item.getAsFile()));
                        } else if (entry.isDirectory) {
                          result.push(_this4._addFilesFromDirectory(entry, entry.name));
                        } else {
                          result.push(void 0);
                        }
                      } else if (item.getAsFile != null) {
                        if (item.kind == null || item.kind === "file") {
                          result.push(_this4.addFile(item.getAsFile()));
                        } else {
                          result.push(void 0);
                        }
                      } else {
                        result.push(void 0);
                      }
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }
                  return result;
                }();
              }
            }, {
              key: "_addFilesFromDirectory",
              value: function _addFilesFromDirectory(directory, path) {
                var _this5 = this;
                var dirReader = directory.createReader();
                var errorHandler = function errorHandler2(error2) {
                  return __guardMethod__(console, "log", function(o) {
                    return o.log(error2);
                  });
                };
                var readEntries = function readEntries2() {
                  return dirReader.readEntries(function(entries) {
                    if (entries.length > 0) {
                      var _iterator7 = dropzone_createForOfIteratorHelper(entries, true), _step7;
                      try {
                        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                          var entry = _step7.value;
                          if (entry.isFile) {
                            entry.file(function(file) {
                              if (_this5.options.ignoreHiddenFiles && file.name.substring(0, 1) === ".") {
                                return;
                              }
                              file.fullPath = "".concat(path, "/").concat(file.name);
                              return _this5.addFile(file);
                            });
                          } else if (entry.isDirectory) {
                            _this5._addFilesFromDirectory(entry, "".concat(path, "/").concat(entry.name));
                          }
                        }
                      } catch (err) {
                        _iterator7.e(err);
                      } finally {
                        _iterator7.f();
                      }
                      readEntries2();
                    }
                    return null;
                  }, errorHandler);
                };
                return readEntries();
              }
            }, {
              key: "accept",
              value: function accept(file, done) {
                if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
                  done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
                } else if (!Dropzone3.isValidFile(file, this.options.acceptedFiles)) {
                  done(this.options.dictInvalidFileType);
                } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                  done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
                  this.emit("maxfilesexceeded", file);
                } else {
                  this.options.accept.call(this, file, done);
                }
              }
            }, {
              key: "addFile",
              value: function addFile(file) {
                var _this6 = this;
                file.upload = {
                  uuid: Dropzone3.uuidv4(),
                  progress: 0,
                  total: file.size,
                  bytesSent: 0,
                  filename: this._renameFile(file)
                };
                this.files.push(file);
                file.status = Dropzone3.ADDED;
                this.emit("addedfile", file);
                this._enqueueThumbnail(file);
                this.accept(file, function(error2) {
                  if (error2) {
                    file.accepted = false;
                    _this6._errorProcessing([file], error2);
                  } else {
                    file.accepted = true;
                    if (_this6.options.autoQueue) {
                      _this6.enqueueFile(file);
                    }
                  }
                  _this6._updateMaxFilesReachedClass();
                });
              }
            }, {
              key: "enqueueFiles",
              value: function enqueueFiles(files) {
                var _iterator8 = dropzone_createForOfIteratorHelper(files, true), _step8;
                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                    var file = _step8.value;
                    this.enqueueFile(file);
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
                return null;
              }
            }, {
              key: "enqueueFile",
              value: function enqueueFile(file) {
                var _this7 = this;
                if (file.status === Dropzone3.ADDED && file.accepted === true) {
                  file.status = Dropzone3.QUEUED;
                  if (this.options.autoProcessQueue) {
                    return setTimeout(function() {
                      return _this7.processQueue();
                    }, 0);
                  }
                } else {
                  throw new Error("This file can't be queued because it has already been processed or was rejected.");
                }
              }
            }, {
              key: "_enqueueThumbnail",
              value: function _enqueueThumbnail(file) {
                var _this8 = this;
                if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
                  this._thumbnailQueue.push(file);
                  return setTimeout(function() {
                    return _this8._processThumbnailQueue();
                  }, 0);
                }
              }
            }, {
              key: "_processThumbnailQueue",
              value: function _processThumbnailQueue() {
                var _this9 = this;
                if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
                  return;
                }
                this._processingThumbnail = true;
                var file = this._thumbnailQueue.shift();
                return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function(dataUrl) {
                  _this9.emit("thumbnail", file, dataUrl);
                  _this9._processingThumbnail = false;
                  return _this9._processThumbnailQueue();
                });
              }
            }, {
              key: "removeFile",
              value: function removeFile(file) {
                if (file.status === Dropzone3.UPLOADING) {
                  this.cancelUpload(file);
                }
                this.files = without(this.files, file);
                this.emit("removedfile", file);
                if (this.files.length === 0) {
                  return this.emit("reset");
                }
              }
            }, {
              key: "removeAllFiles",
              value: function removeAllFiles(cancelIfNecessary) {
                if (cancelIfNecessary == null) {
                  cancelIfNecessary = false;
                }
                var _iterator9 = dropzone_createForOfIteratorHelper(this.files.slice(), true), _step9;
                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                    var file = _step9.value;
                    if (file.status !== Dropzone3.UPLOADING || cancelIfNecessary) {
                      this.removeFile(file);
                    }
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
                return null;
              }
            }, {
              key: "resizeImage",
              value: function resizeImage(file, width, height, resizeMethod, callback) {
                var _this10 = this;
                return this.createThumbnail(file, width, height, resizeMethod, true, function(dataUrl, canvas) {
                  if (canvas == null) {
                    return callback(file);
                  } else {
                    var resizeMimeType = _this10.options.resizeMimeType;
                    if (resizeMimeType == null) {
                      resizeMimeType = file.type;
                    }
                    var resizedDataURL = canvas.toDataURL(resizeMimeType, _this10.options.resizeQuality);
                    if (resizeMimeType === "image/jpeg" || resizeMimeType === "image/jpg") {
                      resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
                    }
                    return callback(Dropzone3.dataURItoBlob(resizedDataURL));
                  }
                });
              }
            }, {
              key: "createThumbnail",
              value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
                var _this11 = this;
                var fileReader = new FileReader();
                fileReader.onload = function() {
                  file.dataURL = fileReader.result;
                  if (file.type === "image/svg+xml") {
                    if (callback != null) {
                      callback(fileReader.result);
                    }
                    return;
                  }
                  _this11.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
                };
                fileReader.readAsDataURL(file);
              }
            }, {
              key: "displayExistingFile",
              value: function displayExistingFile(mockFile, imageUrl, callback, crossOrigin) {
                var _this12 = this;
                var resizeThumbnail = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
                this.emit("addedfile", mockFile);
                this.emit("complete", mockFile);
                if (!resizeThumbnail) {
                  this.emit("thumbnail", mockFile, imageUrl);
                  if (callback)
                    callback();
                } else {
                  var onDone = function onDone2(thumbnail) {
                    _this12.emit("thumbnail", mockFile, thumbnail);
                    if (callback)
                      callback();
                  };
                  mockFile.dataURL = imageUrl;
                  this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, onDone, crossOrigin);
                }
              }
            }, {
              key: "createThumbnailFromUrl",
              value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
                var _this13 = this;
                var img = document.createElement("img");
                if (crossOrigin) {
                  img.crossOrigin = crossOrigin;
                }
                fixOrientation = getComputedStyle(document.body)["imageOrientation"] == "from-image" ? false : fixOrientation;
                img.onload = function() {
                  var loadExif = function loadExif2(callback2) {
                    return callback2(1);
                  };
                  if (typeof EXIF !== "undefined" && EXIF !== null && fixOrientation) {
                    loadExif = function loadExif2(callback2) {
                      return EXIF.getData(img, function() {
                        return callback2(EXIF.getTag(this, "Orientation"));
                      });
                    };
                  }
                  return loadExif(function(orientation) {
                    file.width = img.width;
                    file.height = img.height;
                    var resizeInfo = _this13.options.resize.call(_this13, file, width, height, resizeMethod);
                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
                    canvas.width = resizeInfo.trgWidth;
                    canvas.height = resizeInfo.trgHeight;
                    if (orientation > 4) {
                      canvas.width = resizeInfo.trgHeight;
                      canvas.height = resizeInfo.trgWidth;
                    }
                    switch (orientation) {
                      case 2:
                        ctx.translate(canvas.width, 0);
                        ctx.scale(-1, 1);
                        break;
                      case 3:
                        ctx.translate(canvas.width, canvas.height);
                        ctx.rotate(Math.PI);
                        break;
                      case 4:
                        ctx.translate(0, canvas.height);
                        ctx.scale(1, -1);
                        break;
                      case 5:
                        ctx.rotate(0.5 * Math.PI);
                        ctx.scale(1, -1);
                        break;
                      case 6:
                        ctx.rotate(0.5 * Math.PI);
                        ctx.translate(0, -canvas.width);
                        break;
                      case 7:
                        ctx.rotate(0.5 * Math.PI);
                        ctx.translate(canvas.height, -canvas.width);
                        ctx.scale(-1, 1);
                        break;
                      case 8:
                        ctx.rotate(-0.5 * Math.PI);
                        ctx.translate(-canvas.height, 0);
                        break;
                    }
                    drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                    var thumbnail = canvas.toDataURL("image/png");
                    if (callback != null) {
                      return callback(thumbnail, canvas);
                    }
                  });
                };
                if (callback != null) {
                  img.onerror = callback;
                }
                return img.src = file.dataURL;
              }
            }, {
              key: "processQueue",
              value: function processQueue() {
                var parallelUploads = this.options.parallelUploads;
                var processingLength = this.getUploadingFiles().length;
                var i = processingLength;
                if (processingLength >= parallelUploads) {
                  return;
                }
                var queuedFiles = this.getQueuedFiles();
                if (!(queuedFiles.length > 0)) {
                  return;
                }
                if (this.options.uploadMultiple) {
                  return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
                } else {
                  while (i < parallelUploads) {
                    if (!queuedFiles.length) {
                      return;
                    }
                    this.processFile(queuedFiles.shift());
                    i++;
                  }
                }
              }
            }, {
              key: "processFile",
              value: function processFile(file) {
                return this.processFiles([file]);
              }
            }, {
              key: "processFiles",
              value: function processFiles(files) {
                var _iterator10 = dropzone_createForOfIteratorHelper(files, true), _step10;
                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                    var file = _step10.value;
                    file.processing = true;
                    file.status = Dropzone3.UPLOADING;
                    this.emit("processing", file);
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
                if (this.options.uploadMultiple) {
                  this.emit("processingmultiple", files);
                }
                return this.uploadFiles(files);
              }
            }, {
              key: "_getFilesWithXhr",
              value: function _getFilesWithXhr(xhr) {
                var files;
                return files = this.files.filter(function(file) {
                  return file.xhr === xhr;
                }).map(function(file) {
                  return file;
                });
              }
            }, {
              key: "cancelUpload",
              value: function cancelUpload(file) {
                if (file.status === Dropzone3.UPLOADING) {
                  var groupedFiles = this._getFilesWithXhr(file.xhr);
                  var _iterator11 = dropzone_createForOfIteratorHelper(groupedFiles, true), _step11;
                  try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                      var groupedFile = _step11.value;
                      groupedFile.status = Dropzone3.CANCELED;
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
                  }
                  if (typeof file.xhr !== "undefined") {
                    file.xhr.abort();
                  }
                  var _iterator12 = dropzone_createForOfIteratorHelper(groupedFiles, true), _step12;
                  try {
                    for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                      var _groupedFile = _step12.value;
                      this.emit("canceled", _groupedFile);
                    }
                  } catch (err) {
                    _iterator12.e(err);
                  } finally {
                    _iterator12.f();
                  }
                  if (this.options.uploadMultiple) {
                    this.emit("canceledmultiple", groupedFiles);
                  }
                } else if (file.status === Dropzone3.ADDED || file.status === Dropzone3.QUEUED) {
                  file.status = Dropzone3.CANCELED;
                  this.emit("canceled", file);
                  if (this.options.uploadMultiple) {
                    this.emit("canceledmultiple", [file]);
                  }
                }
                if (this.options.autoProcessQueue) {
                  return this.processQueue();
                }
              }
            }, {
              key: "resolveOption",
              value: function resolveOption(option2) {
                if (typeof option2 === "function") {
                  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                  }
                  return option2.apply(this, args);
                }
                return option2;
              }
            }, {
              key: "uploadFile",
              value: function uploadFile(file) {
                return this.uploadFiles([file]);
              }
            }, {
              key: "uploadFiles",
              value: function uploadFiles(files) {
                var _this14 = this;
                this._transformFiles(files, function(transformedFiles) {
                  if (_this14.options.chunking) {
                    var transformedFile = transformedFiles[0];
                    files[0].upload.chunked = _this14.options.chunking && (_this14.options.forceChunking || transformedFile.size > _this14.options.chunkSize);
                    files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / _this14.options.chunkSize);
                  }
                  if (files[0].upload.chunked) {
                    var file = files[0];
                    var _transformedFile = transformedFiles[0];
                    var startedChunkCount = 0;
                    file.upload.chunks = [];
                    var handleNextChunk = function handleNextChunk2() {
                      var chunkIndex = 0;
                      while (file.upload.chunks[chunkIndex] !== void 0) {
                        chunkIndex++;
                      }
                      if (chunkIndex >= file.upload.totalChunkCount)
                        return;
                      startedChunkCount++;
                      var start = chunkIndex * _this14.options.chunkSize;
                      var end = Math.min(start + _this14.options.chunkSize, _transformedFile.size);
                      var dataBlock = {
                        name: _this14._getParamName(0),
                        data: _transformedFile.webkitSlice ? _transformedFile.webkitSlice(start, end) : _transformedFile.slice(start, end),
                        filename: file.upload.filename,
                        chunkIndex
                      };
                      file.upload.chunks[chunkIndex] = {
                        file,
                        index: chunkIndex,
                        dataBlock,
                        status: Dropzone3.UPLOADING,
                        progress: 0,
                        retries: 0
                      };
                      _this14._uploadData(files, [dataBlock]);
                    };
                    file.upload.finishedChunkUpload = function(chunk, response) {
                      var allFinished = true;
                      chunk.status = Dropzone3.SUCCESS;
                      chunk.dataBlock = null;
                      chunk.xhr = null;
                      for (var i2 = 0; i2 < file.upload.totalChunkCount; i2++) {
                        if (file.upload.chunks[i2] === void 0) {
                          return handleNextChunk();
                        }
                        if (file.upload.chunks[i2].status !== Dropzone3.SUCCESS) {
                          allFinished = false;
                        }
                      }
                      if (allFinished) {
                        _this14.options.chunksUploaded(file, function() {
                          _this14._finished(files, response, null);
                        });
                      }
                    };
                    if (_this14.options.parallelChunkUploads) {
                      for (var i = 0; i < file.upload.totalChunkCount; i++) {
                        handleNextChunk();
                      }
                    } else {
                      handleNextChunk();
                    }
                  } else {
                    var dataBlocks = [];
                    for (var _i2 = 0; _i2 < files.length; _i2++) {
                      dataBlocks[_i2] = {
                        name: _this14._getParamName(_i2),
                        data: transformedFiles[_i2],
                        filename: files[_i2].upload.filename
                      };
                    }
                    _this14._uploadData(files, dataBlocks);
                  }
                });
              }
            }, {
              key: "_getChunk",
              value: function _getChunk(file, xhr) {
                for (var i = 0; i < file.upload.totalChunkCount; i++) {
                  if (file.upload.chunks[i] !== void 0 && file.upload.chunks[i].xhr === xhr) {
                    return file.upload.chunks[i];
                  }
                }
              }
            }, {
              key: "_uploadData",
              value: function _uploadData(files, dataBlocks) {
                var _this15 = this;
                var xhr = new XMLHttpRequest();
                var _iterator13 = dropzone_createForOfIteratorHelper(files, true), _step13;
                try {
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
                    var file = _step13.value;
                    file.xhr = xhr;
                  }
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }
                if (files[0].upload.chunked) {
                  files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
                }
                var method = this.resolveOption(this.options.method, files);
                var url = this.resolveOption(this.options.url, files);
                xhr.open(method, url, true);
                var timeout = this.resolveOption(this.options.timeout, files);
                if (timeout)
                  xhr.timeout = this.resolveOption(this.options.timeout, files);
                xhr.withCredentials = !!this.options.withCredentials;
                xhr.onload = function(e) {
                  _this15._finishedUploading(files, xhr, e);
                };
                xhr.ontimeout = function() {
                  _this15._handleUploadError(files, xhr, "Request timedout after ".concat(_this15.options.timeout / 1e3, " seconds"));
                };
                xhr.onerror = function() {
                  _this15._handleUploadError(files, xhr);
                };
                var progressObj = xhr.upload != null ? xhr.upload : xhr;
                progressObj.onprogress = function(e) {
                  return _this15._updateFilesUploadProgress(files, xhr, e);
                };
                var headers = {
                  Accept: "application/json",
                  "Cache-Control": "no-cache",
                  "X-Requested-With": "XMLHttpRequest"
                };
                if (this.options.headers) {
                  Dropzone3.extend(headers, this.options.headers);
                }
                for (var headerName in headers) {
                  var headerValue = headers[headerName];
                  if (headerValue) {
                    xhr.setRequestHeader(headerName, headerValue);
                  }
                }
                var formData = new FormData();
                if (this.options.params) {
                  var additionalParams = this.options.params;
                  if (typeof additionalParams === "function") {
                    additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
                  }
                  for (var key in additionalParams) {
                    var value = additionalParams[key];
                    if (Array.isArray(value)) {
                      for (var i = 0; i < value.length; i++) {
                        formData.append(key, value[i]);
                      }
                    } else {
                      formData.append(key, value);
                    }
                  }
                }
                var _iterator14 = dropzone_createForOfIteratorHelper(files, true), _step14;
                try {
                  for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                    var _file = _step14.value;
                    this.emit("sending", _file, xhr, formData);
                  }
                } catch (err) {
                  _iterator14.e(err);
                } finally {
                  _iterator14.f();
                }
                if (this.options.uploadMultiple) {
                  this.emit("sendingmultiple", files, xhr, formData);
                }
                this._addFormElementData(formData);
                for (var _i3 = 0; _i3 < dataBlocks.length; _i3++) {
                  var dataBlock = dataBlocks[_i3];
                  formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
                }
                this.submitRequest(xhr, formData, files);
              }
            }, {
              key: "_transformFiles",
              value: function _transformFiles(files, done) {
                var _this16 = this;
                var transformedFiles = [];
                var doneCounter = 0;
                var _loop = function _loop2(i2) {
                  _this16.options.transformFile.call(_this16, files[i2], function(transformedFile) {
                    transformedFiles[i2] = transformedFile;
                    if (++doneCounter === files.length) {
                      done(transformedFiles);
                    }
                  });
                };
                for (var i = 0; i < files.length; i++) {
                  _loop(i);
                }
              }
            }, {
              key: "_addFormElementData",
              value: function _addFormElementData(formData) {
                if (this.element.tagName === "FORM") {
                  var _iterator15 = dropzone_createForOfIteratorHelper(this.element.querySelectorAll("input, textarea, select, button"), true), _step15;
                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
                      var input = _step15.value;
                      var inputName = input.getAttribute("name");
                      var inputType = input.getAttribute("type");
                      if (inputType)
                        inputType = inputType.toLowerCase();
                      if (typeof inputName === "undefined" || inputName === null)
                        continue;
                      if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                        var _iterator16 = dropzone_createForOfIteratorHelper(input.options, true), _step16;
                        try {
                          for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
                            var option2 = _step16.value;
                            if (option2.selected) {
                              formData.append(inputName, option2.value);
                            }
                          }
                        } catch (err) {
                          _iterator16.e(err);
                        } finally {
                          _iterator16.f();
                        }
                      } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
                        formData.append(inputName, input.value);
                      }
                    }
                  } catch (err) {
                    _iterator15.e(err);
                  } finally {
                    _iterator15.f();
                  }
                }
              }
            }, {
              key: "_updateFilesUploadProgress",
              value: function _updateFilesUploadProgress(files, xhr, e) {
                if (!files[0].upload.chunked) {
                  var _iterator17 = dropzone_createForOfIteratorHelper(files, true), _step17;
                  try {
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
                      var file = _step17.value;
                      if (file.upload.total && file.upload.bytesSent && file.upload.bytesSent == file.upload.total) {
                        continue;
                      }
                      if (e) {
                        file.upload.progress = 100 * e.loaded / e.total;
                        file.upload.total = e.total;
                        file.upload.bytesSent = e.loaded;
                      } else {
                        file.upload.progress = 100;
                        file.upload.bytesSent = file.upload.total;
                      }
                      this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
                    }
                  } catch (err) {
                    _iterator17.e(err);
                  } finally {
                    _iterator17.f();
                  }
                } else {
                  var _file2 = files[0];
                  var chunk = this._getChunk(_file2, xhr);
                  if (e) {
                    chunk.progress = 100 * e.loaded / e.total;
                    chunk.total = e.total;
                    chunk.bytesSent = e.loaded;
                  } else {
                    chunk.progress = 100;
                    chunk.bytesSent = chunk.total;
                  }
                  _file2.upload.progress = 0;
                  _file2.upload.total = 0;
                  _file2.upload.bytesSent = 0;
                  for (var i = 0; i < _file2.upload.totalChunkCount; i++) {
                    if (_file2.upload.chunks[i] && typeof _file2.upload.chunks[i].progress !== "undefined") {
                      _file2.upload.progress += _file2.upload.chunks[i].progress;
                      _file2.upload.total += _file2.upload.chunks[i].total;
                      _file2.upload.bytesSent += _file2.upload.chunks[i].bytesSent;
                    }
                  }
                  _file2.upload.progress = _file2.upload.progress / _file2.upload.totalChunkCount;
                  this.emit("uploadprogress", _file2, _file2.upload.progress, _file2.upload.bytesSent);
                }
              }
            }, {
              key: "_finishedUploading",
              value: function _finishedUploading(files, xhr, e) {
                var response;
                if (files[0].status === Dropzone3.CANCELED) {
                  return;
                }
                if (xhr.readyState !== 4) {
                  return;
                }
                if (xhr.responseType !== "arraybuffer" && xhr.responseType !== "blob") {
                  response = xhr.responseText;
                  if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
                    try {
                      response = JSON.parse(response);
                    } catch (error2) {
                      e = error2;
                      response = "Invalid JSON response from server.";
                    }
                  }
                }
                this._updateFilesUploadProgress(files, xhr);
                if (!(200 <= xhr.status && xhr.status < 300)) {
                  this._handleUploadError(files, xhr, response);
                } else {
                  if (files[0].upload.chunked) {
                    files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr), response);
                  } else {
                    this._finished(files, response, e);
                  }
                }
              }
            }, {
              key: "_handleUploadError",
              value: function _handleUploadError(files, xhr, response) {
                if (files[0].status === Dropzone3.CANCELED) {
                  return;
                }
                if (files[0].upload.chunked && this.options.retryChunks) {
                  var chunk = this._getChunk(files[0], xhr);
                  if (chunk.retries++ < this.options.retryChunksLimit) {
                    this._uploadData(files, [chunk.dataBlock]);
                    return;
                  } else {
                    console.warn("Retried this chunk too often. Giving up.");
                  }
                }
                this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
              }
            }, {
              key: "submitRequest",
              value: function submitRequest(xhr, formData, files) {
                if (xhr.readyState != 1) {
                  console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
                  return;
                }
                xhr.send(formData);
              }
            }, {
              key: "_finished",
              value: function _finished(files, responseText, e) {
                var _iterator18 = dropzone_createForOfIteratorHelper(files, true), _step18;
                try {
                  for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
                    var file = _step18.value;
                    file.status = Dropzone3.SUCCESS;
                    this.emit("success", file, responseText, e);
                    this.emit("complete", file);
                  }
                } catch (err) {
                  _iterator18.e(err);
                } finally {
                  _iterator18.f();
                }
                if (this.options.uploadMultiple) {
                  this.emit("successmultiple", files, responseText, e);
                  this.emit("completemultiple", files);
                }
                if (this.options.autoProcessQueue) {
                  return this.processQueue();
                }
              }
            }, {
              key: "_errorProcessing",
              value: function _errorProcessing(files, message, xhr) {
                var _iterator19 = dropzone_createForOfIteratorHelper(files, true), _step19;
                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
                    var file = _step19.value;
                    file.status = Dropzone3.ERROR;
                    this.emit("error", file, message, xhr);
                    this.emit("complete", file);
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }
                if (this.options.uploadMultiple) {
                  this.emit("errormultiple", files, message, xhr);
                  this.emit("completemultiple", files);
                }
                if (this.options.autoProcessQueue) {
                  return this.processQueue();
                }
              }
            }], [{
              key: "initClass",
              value: function initClass() {
                this.prototype.Emitter = Emitter;
                this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
                this.prototype._thumbnailQueue = [];
                this.prototype._processingThumbnail = false;
              }
            }, {
              key: "extend",
              value: function extend2(target) {
                for (var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  objects[_key2 - 1] = arguments[_key2];
                }
                for (var _i4 = 0, _objects = objects; _i4 < _objects.length; _i4++) {
                  var object = _objects[_i4];
                  for (var key in object) {
                    var val = object[key];
                    target[key] = val;
                  }
                }
                return target;
              }
            }, {
              key: "uuidv4",
              value: function uuidv4() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                  var r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
                  return v.toString(16);
                });
              }
            }]);
            return Dropzone3;
          }(Emitter);
          Dropzone2.initClass();
          Dropzone2.version = "5.9.3";
          Dropzone2.options = {};
          Dropzone2.optionsForElement = function(element) {
            if (element.getAttribute("id")) {
              return Dropzone2.options[camelize(element.getAttribute("id"))];
            } else {
              return void 0;
            }
          };
          Dropzone2.instances = [];
          Dropzone2.forElement = function(element) {
            if (typeof element === "string") {
              element = document.querySelector(element);
            }
            if ((element != null ? element.dropzone : void 0) == null) {
              throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
            }
            return element.dropzone;
          };
          Dropzone2.autoDiscover = true;
          Dropzone2.discover = function() {
            var dropzones;
            if (document.querySelectorAll) {
              dropzones = document.querySelectorAll(".dropzone");
            } else {
              dropzones = [];
              var checkElements = function checkElements2(elements) {
                return function() {
                  var result = [];
                  var _iterator20 = dropzone_createForOfIteratorHelper(elements, true), _step20;
                  try {
                    for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
                      var el = _step20.value;
                      if (/(^| )dropzone($| )/.test(el.className)) {
                        result.push(dropzones.push(el));
                      } else {
                        result.push(void 0);
                      }
                    }
                  } catch (err) {
                    _iterator20.e(err);
                  } finally {
                    _iterator20.f();
                  }
                  return result;
                }();
              };
              checkElements(document.getElementsByTagName("div"));
              checkElements(document.getElementsByTagName("form"));
            }
            return function() {
              var result = [];
              var _iterator21 = dropzone_createForOfIteratorHelper(dropzones, true), _step21;
              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
                  var dropzone = _step21.value;
                  if (Dropzone2.optionsForElement(dropzone) !== false) {
                    result.push(new Dropzone2(dropzone));
                  } else {
                    result.push(void 0);
                  }
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }
              return result;
            }();
          };
          Dropzone2.blockedBrowsers = [
            /opera.*(Macintosh|Windows Phone).*version\/12/i
          ];
          Dropzone2.isBrowserSupported = function() {
            var capableBrowser = true;
            if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
              if (!("classList" in document.createElement("a"))) {
                capableBrowser = false;
              } else {
                if (Dropzone2.blacklistedBrowsers !== void 0) {
                  Dropzone2.blockedBrowsers = Dropzone2.blacklistedBrowsers;
                }
                var _iterator22 = dropzone_createForOfIteratorHelper(Dropzone2.blockedBrowsers, true), _step22;
                try {
                  for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                    var regex = _step22.value;
                    if (regex.test(navigator.userAgent)) {
                      capableBrowser = false;
                      continue;
                    }
                  }
                } catch (err) {
                  _iterator22.e(err);
                } finally {
                  _iterator22.f();
                }
              }
            } else {
              capableBrowser = false;
            }
            return capableBrowser;
          };
          Dropzone2.dataURItoBlob = function(dataURI) {
            var byteString = atob(dataURI.split(",")[1]);
            var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
              ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ab], {
              type: mimeString
            });
          };
          var without = function without2(list, rejectedItem) {
            return list.filter(function(item) {
              return item !== rejectedItem;
            }).map(function(item) {
              return item;
            });
          };
          var camelize = function camelize2(str) {
            return str.replace(/[\-_](\w)/g, function(match) {
              return match.charAt(1).toUpperCase();
            });
          };
          Dropzone2.createElement = function(string) {
            var div = document.createElement("div");
            div.innerHTML = string;
            return div.childNodes[0];
          };
          Dropzone2.elementInside = function(element, container) {
            if (element === container) {
              return true;
            }
            while (element = element.parentNode) {
              if (element === container) {
                return true;
              }
            }
            return false;
          };
          Dropzone2.getElement = function(el, name) {
            var element;
            if (typeof el === "string") {
              element = document.querySelector(el);
            } else if (el.nodeType != null) {
              element = el;
            }
            if (element == null) {
              throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector or a plain HTML element."));
            }
            return element;
          };
          Dropzone2.getElements = function(els, name) {
            var el, elements;
            if (els instanceof Array) {
              elements = [];
              try {
                var _iterator23 = dropzone_createForOfIteratorHelper(els, true), _step23;
                try {
                  for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
                    el = _step23.value;
                    elements.push(this.getElement(el, name));
                  }
                } catch (err) {
                  _iterator23.e(err);
                } finally {
                  _iterator23.f();
                }
              } catch (e) {
                elements = null;
              }
            } else if (typeof els === "string") {
              elements = [];
              var _iterator24 = dropzone_createForOfIteratorHelper(document.querySelectorAll(els), true), _step24;
              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
                  el = _step24.value;
                  elements.push(el);
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
            } else if (els.nodeType != null) {
              elements = [els];
            }
            if (elements == null || !elements.length) {
              throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
            }
            return elements;
          };
          Dropzone2.confirm = function(question, accepted, rejected) {
            if (window.confirm(question)) {
              return accepted();
            } else if (rejected != null) {
              return rejected();
            }
          };
          Dropzone2.isValidFile = function(file, acceptedFiles) {
            if (!acceptedFiles) {
              return true;
            }
            acceptedFiles = acceptedFiles.split(",");
            var mimeType = file.type;
            var baseMimeType = mimeType.replace(/\/.*$/, "");
            var _iterator25 = dropzone_createForOfIteratorHelper(acceptedFiles, true), _step25;
            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
                var validType = _step25.value;
                validType = validType.trim();
                if (validType.charAt(0) === ".") {
                  if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                    return true;
                  }
                } else if (/\/\*$/.test(validType)) {
                  if (baseMimeType === validType.replace(/\/.*$/, "")) {
                    return true;
                  }
                } else {
                  if (mimeType === validType) {
                    return true;
                  }
                }
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
            return false;
          };
          if (typeof jQuery !== "undefined" && jQuery !== null) {
            jQuery.fn.dropzone = function(options2) {
              return this.each(function() {
                return new Dropzone2(this, options2);
              });
            };
          }
          Dropzone2.ADDED = "added";
          Dropzone2.QUEUED = "queued";
          Dropzone2.ACCEPTED = Dropzone2.QUEUED;
          Dropzone2.UPLOADING = "uploading";
          Dropzone2.PROCESSING = Dropzone2.UPLOADING;
          Dropzone2.CANCELED = "canceled";
          Dropzone2.ERROR = "error";
          Dropzone2.SUCCESS = "success";
          var detectVerticalSquash = function detectVerticalSquash2(img) {
            var iw = img.naturalWidth;
            var ih = img.naturalHeight;
            var canvas = document.createElement("canvas");
            canvas.width = 1;
            canvas.height = ih;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih), data = _ctx$getImageData.data;
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
              var alpha = data[(py - 1) * 4 + 3];
              if (alpha === 0) {
                ey = py;
              } else {
                sy = py;
              }
              py = ey + sy >> 1;
            }
            var ratio = py / ih;
            if (ratio === 0) {
              return 1;
            } else {
              return ratio;
            }
          };
          var drawImageIOSFix = function drawImageIOSFix2(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
            var vertSquashRatio = detectVerticalSquash(img);
            return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
          };
          var ExifRestore = /* @__PURE__ */ function() {
            function ExifRestore2() {
              dropzone_classCallCheck(this, ExifRestore2);
            }
            dropzone_createClass(ExifRestore2, null, [{
              key: "initClass",
              value: function initClass() {
                this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              }
            }, {
              key: "encode64",
              value: function encode64(input) {
                var output = "";
                var chr1 = void 0;
                var chr2 = void 0;
                var chr3 = "";
                var enc1 = void 0;
                var enc2 = void 0;
                var enc3 = void 0;
                var enc4 = "";
                var i = 0;
                while (true) {
                  chr1 = input[i++];
                  chr2 = input[i++];
                  chr3 = input[i++];
                  enc1 = chr1 >> 2;
                  enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                  enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                  enc4 = chr3 & 63;
                  if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                  } else if (isNaN(chr3)) {
                    enc4 = 64;
                  }
                  output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
                  chr1 = chr2 = chr3 = "";
                  enc1 = enc2 = enc3 = enc4 = "";
                  if (!(i < input.length)) {
                    break;
                  }
                }
                return output;
              }
            }, {
              key: "restore",
              value: function restore(origFileBase64, resizedFileBase64) {
                if (!origFileBase64.match("data:image/jpeg;base64,")) {
                  return resizedFileBase64;
                }
                var rawImage = this.decode64(origFileBase64.replace("data:image/jpeg;base64,", ""));
                var segments = this.slice2Segments(rawImage);
                var image = this.exifManipulation(resizedFileBase64, segments);
                return "data:image/jpeg;base64,".concat(this.encode64(image));
              }
            }, {
              key: "exifManipulation",
              value: function exifManipulation(resizedFileBase64, segments) {
                var exifArray = this.getExifArray(segments);
                var newImageArray = this.insertExif(resizedFileBase64, exifArray);
                var aBuffer = new Uint8Array(newImageArray);
                return aBuffer;
              }
            }, {
              key: "getExifArray",
              value: function getExifArray(segments) {
                var seg = void 0;
                var x = 0;
                while (x < segments.length) {
                  seg = segments[x];
                  if (seg[0] === 255 & seg[1] === 225) {
                    return seg;
                  }
                  x++;
                }
                return [];
              }
            }, {
              key: "insertExif",
              value: function insertExif(resizedFileBase64, exifArray) {
                var imageData = resizedFileBase64.replace("data:image/jpeg;base64,", "");
                var buf = this.decode64(imageData);
                var separatePoint = buf.indexOf(255, 3);
                var mae = buf.slice(0, separatePoint);
                var ato = buf.slice(separatePoint);
                var array = mae;
                array = array.concat(exifArray);
                array = array.concat(ato);
                return array;
              }
            }, {
              key: "slice2Segments",
              value: function slice2Segments(rawImageArray) {
                var head = 0;
                var segments = [];
                while (true) {
                  var length;
                  if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
                    break;
                  }
                  if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
                    head += 2;
                  } else {
                    length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
                    var endPoint = head + length + 2;
                    var seg = rawImageArray.slice(head, endPoint);
                    segments.push(seg);
                    head = endPoint;
                  }
                  if (head > rawImageArray.length) {
                    break;
                  }
                }
                return segments;
              }
            }, {
              key: "decode64",
              value: function decode64(input) {
                var output = "";
                var chr1 = void 0;
                var chr2 = void 0;
                var chr3 = "";
                var enc1 = void 0;
                var enc2 = void 0;
                var enc3 = void 0;
                var enc4 = "";
                var i = 0;
                var buf = [];
                var base64test = /[^A-Za-z0-9\+\/\=]/g;
                if (base64test.exec(input)) {
                  console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
                }
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (true) {
                  enc1 = this.KEY_STR.indexOf(input.charAt(i++));
                  enc2 = this.KEY_STR.indexOf(input.charAt(i++));
                  enc3 = this.KEY_STR.indexOf(input.charAt(i++));
                  enc4 = this.KEY_STR.indexOf(input.charAt(i++));
                  chr1 = enc1 << 2 | enc2 >> 4;
                  chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                  chr3 = (enc3 & 3) << 6 | enc4;
                  buf.push(chr1);
                  if (enc3 !== 64) {
                    buf.push(chr2);
                  }
                  if (enc4 !== 64) {
                    buf.push(chr3);
                  }
                  chr1 = chr2 = chr3 = "";
                  enc1 = enc2 = enc3 = enc4 = "";
                  if (!(i < input.length)) {
                    break;
                  }
                }
                return buf;
              }
            }]);
            return ExifRestore2;
          }();
          ExifRestore.initClass();
          var contentLoaded = function contentLoaded2(win, fn) {
            var done = false;
            var top = true;
            var doc = win.document;
            var root = doc.documentElement;
            var add = doc.addEventListener ? "addEventListener" : "attachEvent";
            var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
            var pre = doc.addEventListener ? "" : "on";
            var init = function init2(e) {
              if (e.type === "readystatechange" && doc.readyState !== "complete") {
                return;
              }
              (e.type === "load" ? win : doc)[rem](pre + e.type, init2, false);
              if (!done && (done = true)) {
                return fn.call(win, e.type || e);
              }
            };
            var poll = function poll2() {
              try {
                root.doScroll("left");
              } catch (e) {
                setTimeout(poll2, 50);
                return;
              }
              return init("poll");
            };
            if (doc.readyState !== "complete") {
              if (doc.createEventObject && root.doScroll) {
                try {
                  top = !win.frameElement;
                } catch (error2) {
                }
                if (top) {
                  poll();
                }
              }
              doc[add](pre + "DOMContentLoaded", init, false);
              doc[add](pre + "readystatechange", init, false);
              return win[add](pre + "load", init, false);
            }
          };
          Dropzone2._autoDiscoverFunction = function() {
            if (Dropzone2.autoDiscover) {
              return Dropzone2.discover();
            }
          };
          contentLoaded(window, Dropzone2._autoDiscoverFunction);
          function __guard__(value, transform) {
            return typeof value !== "undefined" && value !== null ? transform(value) : void 0;
          }
          function __guardMethod__(obj, methodName, transform) {
            if (typeof obj !== "undefined" && obj !== null && typeof obj[methodName] === "function") {
              return transform(obj, methodName);
            } else {
              return void 0;
            }
          }
          ;
          window.Dropzone = Dropzone2;
          var dropzone_dist = Dropzone2;
        }();
        return __webpack_exports__;
      }();
    });
  }
});

// node_modules/entities/lib/maps/entities.json
var require_entities = __commonJS({
  "node_modules/entities/lib/maps/entities.json"(exports, module) {
    module.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
  }
});

// node_modules/markdown-it/lib/common/entities.js
var require_entities2 = __commonJS({
  "node_modules/markdown-it/lib/common/entities.js"(exports, module) {
    "use strict";
    module.exports = require_entities();
  }
});

// node_modules/uc.micro/categories/P/regex.js
var require_regex = __commonJS({
  "node_modules/uc.micro/categories/P/regex.js"(exports, module) {
    module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
  }
});

// node_modules/mdurl/encode.js
var require_encode = __commonJS({
  "node_modules/mdurl/encode.js"(exports, module) {
    "use strict";
    var encodeCache = {};
    function getEncodeCache(exclude) {
      var i, ch, cache = encodeCache[exclude];
      if (cache) {
        return cache;
      }
      cache = encodeCache[exclude] = [];
      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        if (/^[0-9a-z]$/i.test(ch)) {
          cache.push(ch);
        } else {
          cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
        }
      }
      for (i = 0; i < exclude.length; i++) {
        cache[exclude.charCodeAt(i)] = exclude[i];
      }
      return cache;
    }
    function encode2(string, exclude, keepEscaped) {
      var i, l, code, nextCode, cache, result = "";
      if (typeof exclude !== "string") {
        keepEscaped = exclude;
        exclude = encode2.defaultChars;
      }
      if (typeof keepEscaped === "undefined") {
        keepEscaped = true;
      }
      cache = getEncodeCache(exclude);
      for (i = 0, l = string.length; i < l; i++) {
        code = string.charCodeAt(i);
        if (keepEscaped && code === 37 && i + 2 < l) {
          if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
            result += string.slice(i, i + 3);
            i += 2;
            continue;
          }
        }
        if (code < 128) {
          result += cache[code];
          continue;
        }
        if (code >= 55296 && code <= 57343) {
          if (code >= 55296 && code <= 56319 && i + 1 < l) {
            nextCode = string.charCodeAt(i + 1);
            if (nextCode >= 56320 && nextCode <= 57343) {
              result += encodeURIComponent(string[i] + string[i + 1]);
              i++;
              continue;
            }
          }
          result += "%EF%BF%BD";
          continue;
        }
        result += encodeURIComponent(string[i]);
      }
      return result;
    }
    encode2.defaultChars = ";/?:@&=+$,-_.!~*'()#";
    encode2.componentChars = "-_.!~*'()";
    module.exports = encode2;
  }
});

// node_modules/mdurl/decode.js
var require_decode = __commonJS({
  "node_modules/mdurl/decode.js"(exports, module) {
    "use strict";
    var decodeCache = {};
    function getDecodeCache(exclude) {
      var i, ch, cache = decodeCache[exclude];
      if (cache) {
        return cache;
      }
      cache = decodeCache[exclude] = [];
      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        cache.push(ch);
      }
      for (i = 0; i < exclude.length; i++) {
        ch = exclude.charCodeAt(i);
        cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
      }
      return cache;
    }
    function decode2(string, exclude) {
      var cache;
      if (typeof exclude !== "string") {
        exclude = decode2.defaultChars;
      }
      cache = getDecodeCache(exclude);
      return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
        var i, l, b1, b2, b3, b4, chr, result = "";
        for (i = 0, l = seq.length; i < l; i += 3) {
          b1 = parseInt(seq.slice(i + 1, i + 3), 16);
          if (b1 < 128) {
            result += cache[b1];
            continue;
          }
          if ((b1 & 224) === 192 && i + 3 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            if ((b2 & 192) === 128) {
              chr = b1 << 6 & 1984 | b2 & 63;
              if (chr < 128) {
                result += "\uFFFD\uFFFD";
              } else {
                result += String.fromCharCode(chr);
              }
              i += 3;
              continue;
            }
          }
          if ((b1 & 240) === 224 && i + 6 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            b3 = parseInt(seq.slice(i + 7, i + 9), 16);
            if ((b2 & 192) === 128 && (b3 & 192) === 128) {
              chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
              if (chr < 2048 || chr >= 55296 && chr <= 57343) {
                result += "\uFFFD\uFFFD\uFFFD";
              } else {
                result += String.fromCharCode(chr);
              }
              i += 6;
              continue;
            }
          }
          if ((b1 & 248) === 240 && i + 9 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            b3 = parseInt(seq.slice(i + 7, i + 9), 16);
            b4 = parseInt(seq.slice(i + 10, i + 12), 16);
            if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
              chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
              if (chr < 65536 || chr > 1114111) {
                result += "\uFFFD\uFFFD\uFFFD\uFFFD";
              } else {
                chr -= 65536;
                result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
              }
              i += 9;
              continue;
            }
          }
          result += "\uFFFD";
        }
        return result;
      });
    }
    decode2.defaultChars = ";/?:@&=+$,#";
    decode2.componentChars = "";
    module.exports = decode2;
  }
});

// node_modules/mdurl/format.js
var require_format = __commonJS({
  "node_modules/mdurl/format.js"(exports, module) {
    "use strict";
    module.exports = function format(url) {
      var result = "";
      result += url.protocol || "";
      result += url.slashes ? "//" : "";
      result += url.auth ? url.auth + "@" : "";
      if (url.hostname && url.hostname.indexOf(":") !== -1) {
        result += "[" + url.hostname + "]";
      } else {
        result += url.hostname || "";
      }
      result += url.port ? ":" + url.port : "";
      result += url.pathname || "";
      result += url.search || "";
      result += url.hash || "";
      return result;
    };
  }
});

// node_modules/mdurl/parse.js
var require_parse = __commonJS({
  "node_modules/mdurl/parse.js"(exports, module) {
    "use strict";
    function Url() {
      this.protocol = null;
      this.slashes = null;
      this.auth = null;
      this.port = null;
      this.hostname = null;
      this.hash = null;
      this.search = null;
      this.pathname = null;
    }
    var protocolPattern = /^([a-z0-9.+-]+:)/i;
    var portPattern = /:[0-9]*$/;
    var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
    var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
    var autoEscape = ["'"].concat(unwise);
    var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
    var hostEndingChars = ["/", "?", "#"];
    var hostnameMaxLen = 255;
    var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    var hostlessProtocol = {
      "javascript": true,
      "javascript:": true
    };
    var slashedProtocol = {
      "http": true,
      "https": true,
      "ftp": true,
      "gopher": true,
      "file": true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    };
    function urlParse(url, slashesDenoteHost) {
      if (url && url instanceof Url) {
        return url;
      }
      var u = new Url();
      u.parse(url, slashesDenoteHost);
      return u;
    }
    Url.prototype.parse = function(url, slashesDenoteHost) {
      var i, l, lowerProto, hec, slashes, rest = url;
      rest = rest.trim();
      if (!slashesDenoteHost && url.split("#").length === 1) {
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
          this.pathname = simplePath[1];
          if (simplePath[2]) {
            this.search = simplePath[2];
          }
          return this;
        }
      }
      var proto = protocolPattern.exec(rest);
      if (proto) {
        proto = proto[0];
        lowerProto = proto.toLowerCase();
        this.protocol = proto;
        rest = rest.substr(proto.length);
      }
      if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        slashes = rest.substr(0, 2) === "//";
        if (slashes && !(proto && hostlessProtocol[proto])) {
          rest = rest.substr(2);
          this.slashes = true;
        }
      }
      if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
        var hostEnd = -1;
        for (i = 0; i < hostEndingChars.length; i++) {
          hec = rest.indexOf(hostEndingChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
            hostEnd = hec;
          }
        }
        var auth, atSign;
        if (hostEnd === -1) {
          atSign = rest.lastIndexOf("@");
        } else {
          atSign = rest.lastIndexOf("@", hostEnd);
        }
        if (atSign !== -1) {
          auth = rest.slice(0, atSign);
          rest = rest.slice(atSign + 1);
          this.auth = auth;
        }
        hostEnd = -1;
        for (i = 0; i < nonHostChars.length; i++) {
          hec = rest.indexOf(nonHostChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
            hostEnd = hec;
          }
        }
        if (hostEnd === -1) {
          hostEnd = rest.length;
        }
        if (rest[hostEnd - 1] === ":") {
          hostEnd--;
        }
        var host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);
        this.parseHost(host);
        this.hostname = this.hostname || "";
        var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!ipv6Hostname) {
          var hostparts = this.hostname.split(/\./);
          for (i = 0, l = hostparts.length; i < l; i++) {
            var part = hostparts[i];
            if (!part) {
              continue;
            }
            if (!part.match(hostnamePartPattern)) {
              var newpart = "";
              for (var j = 0, k = part.length; j < k; j++) {
                if (part.charCodeAt(j) > 127) {
                  newpart += "x";
                } else {
                  newpart += part[j];
                }
              }
              if (!newpart.match(hostnamePartPattern)) {
                var validParts = hostparts.slice(0, i);
                var notHost = hostparts.slice(i + 1);
                var bit = part.match(hostnamePartStart);
                if (bit) {
                  validParts.push(bit[1]);
                  notHost.unshift(bit[2]);
                }
                if (notHost.length) {
                  rest = notHost.join(".") + rest;
                }
                this.hostname = validParts.join(".");
                break;
              }
            }
          }
        }
        if (this.hostname.length > hostnameMaxLen) {
          this.hostname = "";
        }
        if (ipv6Hostname) {
          this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        }
      }
      var hash = rest.indexOf("#");
      if (hash !== -1) {
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
      }
      var qm = rest.indexOf("?");
      if (qm !== -1) {
        this.search = rest.substr(qm);
        rest = rest.slice(0, qm);
      }
      if (rest) {
        this.pathname = rest;
      }
      if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
        this.pathname = "";
      }
      return this;
    };
    Url.prototype.parseHost = function(host) {
      var port = portPattern.exec(host);
      if (port) {
        port = port[0];
        if (port !== ":") {
          this.port = port.substr(1);
        }
        host = host.substr(0, host.length - port.length);
      }
      if (host) {
        this.hostname = host;
      }
    };
    module.exports = urlParse;
  }
});

// node_modules/mdurl/index.js
var require_mdurl = __commonJS({
  "node_modules/mdurl/index.js"(exports, module) {
    "use strict";
    module.exports.encode = require_encode();
    module.exports.decode = require_decode();
    module.exports.format = require_format();
    module.exports.parse = require_parse();
  }
});

// node_modules/uc.micro/properties/Any/regex.js
var require_regex2 = __commonJS({
  "node_modules/uc.micro/properties/Any/regex.js"(exports, module) {
    module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  }
});

// node_modules/uc.micro/categories/Cc/regex.js
var require_regex3 = __commonJS({
  "node_modules/uc.micro/categories/Cc/regex.js"(exports, module) {
    module.exports = /[\0-\x1F\x7F-\x9F]/;
  }
});

// node_modules/uc.micro/categories/Cf/regex.js
var require_regex4 = __commonJS({
  "node_modules/uc.micro/categories/Cf/regex.js"(exports, module) {
    module.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
  }
});

// node_modules/uc.micro/categories/Z/regex.js
var require_regex5 = __commonJS({
  "node_modules/uc.micro/categories/Z/regex.js"(exports, module) {
    module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  }
});

// node_modules/uc.micro/index.js
var require_uc = __commonJS({
  "node_modules/uc.micro/index.js"(exports) {
    "use strict";
    exports.Any = require_regex2();
    exports.Cc = require_regex3();
    exports.Cf = require_regex4();
    exports.P = require_regex();
    exports.Z = require_regex5();
  }
});

// node_modules/markdown-it/lib/common/utils.js
var require_utils = __commonJS({
  "node_modules/markdown-it/lib/common/utils.js"(exports) {
    "use strict";
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function has(object, key) {
      return _hasOwnProperty.call(object, key);
    }
    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function(source) {
        if (!source) {
          return;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be object");
        }
        Object.keys(source).forEach(function(key) {
          obj[key] = source[key];
        });
      });
      return obj;
    }
    function arrayReplaceAt(src, pos, newElements) {
      return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
    }
    function isValidEntityCode(c) {
      if (c >= 55296 && c <= 57343) {
        return false;
      }
      if (c >= 64976 && c <= 65007) {
        return false;
      }
      if ((c & 65535) === 65535 || (c & 65535) === 65534) {
        return false;
      }
      if (c >= 0 && c <= 8) {
        return false;
      }
      if (c === 11) {
        return false;
      }
      if (c >= 14 && c <= 31) {
        return false;
      }
      if (c >= 127 && c <= 159) {
        return false;
      }
      if (c > 1114111) {
        return false;
      }
      return true;
    }
    function fromCodePoint(c) {
      if (c > 65535) {
        c -= 65536;
        var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
        return String.fromCharCode(surrogate1, surrogate2);
      }
      return String.fromCharCode(c);
    }
    var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
    var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
    var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
    var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
    var entities = require_entities2();
    function replaceEntityPattern(match, name) {
      var code = 0;
      if (has(entities, name)) {
        return entities[name];
      }
      if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
        code = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
        if (isValidEntityCode(code)) {
          return fromCodePoint(code);
        }
      }
      return match;
    }
    function unescapeMd(str) {
      if (str.indexOf("\\") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_MD_RE, "$1");
    }
    function unescapeAll(str) {
      if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
        if (escaped) {
          return escaped;
        }
        return replaceEntityPattern(match, entity);
      });
    }
    var HTML_ESCAPE_TEST_RE = /[&<>"]/;
    var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
    var HTML_REPLACEMENTS = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function replaceUnsafeChar(ch) {
      return HTML_REPLACEMENTS[ch];
    }
    function escapeHtml2(str) {
      if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
      }
      return str;
    }
    var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
    function escapeRE(str) {
      return str.replace(REGEXP_ESCAPE_RE, "\\$&");
    }
    function isSpace(code) {
      switch (code) {
        case 9:
        case 32:
          return true;
      }
      return false;
    }
    function isWhiteSpace(code) {
      if (code >= 8192 && code <= 8202) {
        return true;
      }
      switch (code) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return true;
      }
      return false;
    }
    var UNICODE_PUNCT_RE = require_regex();
    function isPunctChar(ch) {
      return UNICODE_PUNCT_RE.test(ch);
    }
    function isMdAsciiPunct(ch) {
      switch (ch) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }
    function normalizeReference(str) {
      str = str.trim().replace(/\s+/g, " ");
      if ("\u1E9E".toLowerCase() === "\u1E7E") {
        str = str.replace(/ẞ/g, "\xDF");
      }
      return str.toLowerCase().toUpperCase();
    }
    exports.lib = {};
    exports.lib.mdurl = require_mdurl();
    exports.lib.ucmicro = require_uc();
    exports.assign = assign;
    exports.isString = isString;
    exports.has = has;
    exports.unescapeMd = unescapeMd;
    exports.unescapeAll = unescapeAll;
    exports.isValidEntityCode = isValidEntityCode;
    exports.fromCodePoint = fromCodePoint;
    exports.escapeHtml = escapeHtml2;
    exports.arrayReplaceAt = arrayReplaceAt;
    exports.isSpace = isSpace;
    exports.isWhiteSpace = isWhiteSpace;
    exports.isMdAsciiPunct = isMdAsciiPunct;
    exports.isPunctChar = isPunctChar;
    exports.escapeRE = escapeRE;
    exports.normalizeReference = normalizeReference;
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_label.js
var require_parse_link_label = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_label.js"(exports, module) {
    "use strict";
    module.exports = function parseLinkLabel(state, start, disableNested) {
      var level, found, marker, prevPos, labelEnd = -1, max = state.posMax, oldPos = state.pos;
      state.pos = start + 1;
      level = 1;
      while (state.pos < max) {
        marker = state.src.charCodeAt(state.pos);
        if (marker === 93) {
          level--;
          if (level === 0) {
            found = true;
            break;
          }
        }
        prevPos = state.pos;
        state.md.inline.skipToken(state);
        if (marker === 91) {
          if (prevPos === state.pos - 1) {
            level++;
          } else if (disableNested) {
            state.pos = oldPos;
            return -1;
          }
        }
      }
      if (found) {
        labelEnd = state.pos;
      }
      state.pos = oldPos;
      return labelEnd;
    };
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_destination.js
var require_parse_link_destination = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_destination.js"(exports, module) {
    "use strict";
    var unescapeAll = require_utils().unescapeAll;
    module.exports = function parseLinkDestination(str, pos, max) {
      var code, level, lines = 0, start = pos, result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ""
      };
      if (str.charCodeAt(pos) === 60) {
        pos++;
        while (pos < max) {
          code = str.charCodeAt(pos);
          if (code === 10) {
            return result;
          }
          if (code === 60) {
            return result;
          }
          if (code === 62) {
            result.pos = pos + 1;
            result.str = unescapeAll(str.slice(start + 1, pos));
            result.ok = true;
            return result;
          }
          if (code === 92 && pos + 1 < max) {
            pos += 2;
            continue;
          }
          pos++;
        }
        return result;
      }
      level = 0;
      while (pos < max) {
        code = str.charCodeAt(pos);
        if (code === 32) {
          break;
        }
        if (code < 32 || code === 127) {
          break;
        }
        if (code === 92 && pos + 1 < max) {
          if (str.charCodeAt(pos + 1) === 32) {
            break;
          }
          pos += 2;
          continue;
        }
        if (code === 40) {
          level++;
          if (level > 32) {
            return result;
          }
        }
        if (code === 41) {
          if (level === 0) {
            break;
          }
          level--;
        }
        pos++;
      }
      if (start === pos) {
        return result;
      }
      if (level !== 0) {
        return result;
      }
      result.str = unescapeAll(str.slice(start, pos));
      result.lines = lines;
      result.pos = pos;
      result.ok = true;
      return result;
    };
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_title.js
var require_parse_link_title = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_title.js"(exports, module) {
    "use strict";
    var unescapeAll = require_utils().unescapeAll;
    module.exports = function parseLinkTitle(str, pos, max) {
      var code, marker, lines = 0, start = pos, result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ""
      };
      if (pos >= max) {
        return result;
      }
      marker = str.charCodeAt(pos);
      if (marker !== 34 && marker !== 39 && marker !== 40) {
        return result;
      }
      pos++;
      if (marker === 40) {
        marker = 41;
      }
      while (pos < max) {
        code = str.charCodeAt(pos);
        if (code === marker) {
          result.pos = pos + 1;
          result.lines = lines;
          result.str = unescapeAll(str.slice(start + 1, pos));
          result.ok = true;
          return result;
        } else if (code === 40 && marker === 41) {
          return result;
        } else if (code === 10) {
          lines++;
        } else if (code === 92 && pos + 1 < max) {
          pos++;
          if (str.charCodeAt(pos) === 10) {
            lines++;
          }
        }
        pos++;
      }
      return result;
    };
  }
});

// node_modules/markdown-it/lib/helpers/index.js
var require_helpers = __commonJS({
  "node_modules/markdown-it/lib/helpers/index.js"(exports) {
    "use strict";
    exports.parseLinkLabel = require_parse_link_label();
    exports.parseLinkDestination = require_parse_link_destination();
    exports.parseLinkTitle = require_parse_link_title();
  }
});

// node_modules/markdown-it/lib/renderer.js
var require_renderer = __commonJS({
  "node_modules/markdown-it/lib/renderer.js"(exports, module) {
    "use strict";
    var assign = require_utils().assign;
    var unescapeAll = require_utils().unescapeAll;
    var escapeHtml2 = require_utils().escapeHtml;
    var default_rules = {};
    default_rules.code_inline = function(tokens, idx, options2, env, slf) {
      var token = tokens[idx];
      return "<code" + slf.renderAttrs(token) + ">" + escapeHtml2(tokens[idx].content) + "</code>";
    };
    default_rules.code_block = function(tokens, idx, options2, env, slf) {
      var token = tokens[idx];
      return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml2(tokens[idx].content) + "</code></pre>\n";
    };
    default_rules.fence = function(tokens, idx, options2, env, slf) {
      var token = tokens[idx], info = token.info ? unescapeAll(token.info).trim() : "", langName = "", langAttrs = "", highlighted, i, arr, tmpAttrs, tmpToken;
      if (info) {
        arr = info.split(/(\s+)/g);
        langName = arr[0];
        langAttrs = arr.slice(2).join("");
      }
      if (options2.highlight) {
        highlighted = options2.highlight(token.content, langName, langAttrs) || escapeHtml2(token.content);
      } else {
        highlighted = escapeHtml2(token.content);
      }
      if (highlighted.indexOf("<pre") === 0) {
        return highlighted + "\n";
      }
      if (info) {
        i = token.attrIndex("class");
        tmpAttrs = token.attrs ? token.attrs.slice() : [];
        if (i < 0) {
          tmpAttrs.push(["class", options2.langPrefix + langName]);
        } else {
          tmpAttrs[i] = tmpAttrs[i].slice();
          tmpAttrs[i][1] += " " + options2.langPrefix + langName;
        }
        tmpToken = {
          attrs: tmpAttrs
        };
        return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
      }
      return "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
    };
    default_rules.image = function(tokens, idx, options2, env, slf) {
      var token = tokens[idx];
      token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options2, env);
      return slf.renderToken(tokens, idx, options2);
    };
    default_rules.hardbreak = function(tokens, idx, options2) {
      return options2.xhtmlOut ? "<br />\n" : "<br>\n";
    };
    default_rules.softbreak = function(tokens, idx, options2) {
      return options2.breaks ? options2.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
    };
    default_rules.text = function(tokens, idx) {
      return escapeHtml2(tokens[idx].content);
    };
    default_rules.html_block = function(tokens, idx) {
      return tokens[idx].content;
    };
    default_rules.html_inline = function(tokens, idx) {
      return tokens[idx].content;
    };
    function Renderer() {
      this.rules = assign({}, default_rules);
    }
    Renderer.prototype.renderAttrs = function renderAttrs(token) {
      var i, l, result;
      if (!token.attrs) {
        return "";
      }
      result = "";
      for (i = 0, l = token.attrs.length; i < l; i++) {
        result += " " + escapeHtml2(token.attrs[i][0]) + '="' + escapeHtml2(token.attrs[i][1]) + '"';
      }
      return result;
    };
    Renderer.prototype.renderToken = function renderToken(tokens, idx, options2) {
      var nextToken, result = "", needLf = false, token = tokens[idx];
      if (token.hidden) {
        return "";
      }
      if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
        result += "\n";
      }
      result += (token.nesting === -1 ? "</" : "<") + token.tag;
      result += this.renderAttrs(token);
      if (token.nesting === 0 && options2.xhtmlOut) {
        result += " /";
      }
      if (token.block) {
        needLf = true;
        if (token.nesting === 1) {
          if (idx + 1 < tokens.length) {
            nextToken = tokens[idx + 1];
            if (nextToken.type === "inline" || nextToken.hidden) {
              needLf = false;
            } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
              needLf = false;
            }
          }
        }
      }
      result += needLf ? ">\n" : ">";
      return result;
    };
    Renderer.prototype.renderInline = function(tokens, options2, env) {
      var type, result = "", rules = this.rules;
      for (var i = 0, len = tokens.length; i < len; i++) {
        type = tokens[i].type;
        if (typeof rules[type] !== "undefined") {
          result += rules[type](tokens, i, options2, env, this);
        } else {
          result += this.renderToken(tokens, i, options2);
        }
      }
      return result;
    };
    Renderer.prototype.renderInlineAsText = function(tokens, options2, env) {
      var result = "";
      for (var i = 0, len = tokens.length; i < len; i++) {
        if (tokens[i].type === "text") {
          result += tokens[i].content;
        } else if (tokens[i].type === "image") {
          result += this.renderInlineAsText(tokens[i].children, options2, env);
        } else if (tokens[i].type === "softbreak") {
          result += "\n";
        }
      }
      return result;
    };
    Renderer.prototype.render = function(tokens, options2, env) {
      var i, len, type, result = "", rules = this.rules;
      for (i = 0, len = tokens.length; i < len; i++) {
        type = tokens[i].type;
        if (type === "inline") {
          result += this.renderInline(tokens[i].children, options2, env);
        } else if (typeof rules[type] !== "undefined") {
          result += rules[tokens[i].type](tokens, i, options2, env, this);
        } else {
          result += this.renderToken(tokens, i, options2, env);
        }
      }
      return result;
    };
    module.exports = Renderer;
  }
});

// node_modules/markdown-it/lib/ruler.js
var require_ruler = __commonJS({
  "node_modules/markdown-it/lib/ruler.js"(exports, module) {
    "use strict";
    function Ruler() {
      this.__rules__ = [];
      this.__cache__ = null;
    }
    Ruler.prototype.__find__ = function(name) {
      for (var i = 0; i < this.__rules__.length; i++) {
        if (this.__rules__[i].name === name) {
          return i;
        }
      }
      return -1;
    };
    Ruler.prototype.__compile__ = function() {
      var self2 = this;
      var chains = [""];
      self2.__rules__.forEach(function(rule) {
        if (!rule.enabled) {
          return;
        }
        rule.alt.forEach(function(altName) {
          if (chains.indexOf(altName) < 0) {
            chains.push(altName);
          }
        });
      });
      self2.__cache__ = {};
      chains.forEach(function(chain) {
        self2.__cache__[chain] = [];
        self2.__rules__.forEach(function(rule) {
          if (!rule.enabled) {
            return;
          }
          if (chain && rule.alt.indexOf(chain) < 0) {
            return;
          }
          self2.__cache__[chain].push(rule.fn);
        });
      });
    };
    Ruler.prototype.at = function(name, fn, options2) {
      var index2 = this.__find__(name);
      var opt = options2 || {};
      if (index2 === -1) {
        throw new Error("Parser rule not found: " + name);
      }
      this.__rules__[index2].fn = fn;
      this.__rules__[index2].alt = opt.alt || [];
      this.__cache__ = null;
    };
    Ruler.prototype.before = function(beforeName, ruleName, fn, options2) {
      var index2 = this.__find__(beforeName);
      var opt = options2 || {};
      if (index2 === -1) {
        throw new Error("Parser rule not found: " + beforeName);
      }
      this.__rules__.splice(index2, 0, {
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.after = function(afterName, ruleName, fn, options2) {
      var index2 = this.__find__(afterName);
      var opt = options2 || {};
      if (index2 === -1) {
        throw new Error("Parser rule not found: " + afterName);
      }
      this.__rules__.splice(index2 + 1, 0, {
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.push = function(ruleName, fn, options2) {
      var opt = options2 || {};
      this.__rules__.push({
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.enable = function(list, ignoreInvalid) {
      if (!Array.isArray(list)) {
        list = [list];
      }
      var result = [];
      list.forEach(function(name) {
        var idx = this.__find__(name);
        if (idx < 0) {
          if (ignoreInvalid) {
            return;
          }
          throw new Error("Rules manager: invalid rule name " + name);
        }
        this.__rules__[idx].enabled = true;
        result.push(name);
      }, this);
      this.__cache__ = null;
      return result;
    };
    Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
      if (!Array.isArray(list)) {
        list = [list];
      }
      this.__rules__.forEach(function(rule) {
        rule.enabled = false;
      });
      this.enable(list, ignoreInvalid);
    };
    Ruler.prototype.disable = function(list, ignoreInvalid) {
      if (!Array.isArray(list)) {
        list = [list];
      }
      var result = [];
      list.forEach(function(name) {
        var idx = this.__find__(name);
        if (idx < 0) {
          if (ignoreInvalid) {
            return;
          }
          throw new Error("Rules manager: invalid rule name " + name);
        }
        this.__rules__[idx].enabled = false;
        result.push(name);
      }, this);
      this.__cache__ = null;
      return result;
    };
    Ruler.prototype.getRules = function(chainName) {
      if (this.__cache__ === null) {
        this.__compile__();
      }
      return this.__cache__[chainName] || [];
    };
    module.exports = Ruler;
  }
});

// node_modules/markdown-it/lib/rules_core/normalize.js
var require_normalize = __commonJS({
  "node_modules/markdown-it/lib/rules_core/normalize.js"(exports, module) {
    "use strict";
    var NEWLINES_RE = /\r\n?|\n/g;
    var NULL_RE = /\0/g;
    module.exports = function normalize(state) {
      var str;
      str = state.src.replace(NEWLINES_RE, "\n");
      str = str.replace(NULL_RE, "\uFFFD");
      state.src = str;
    };
  }
});

// node_modules/markdown-it/lib/rules_core/block.js
var require_block = __commonJS({
  "node_modules/markdown-it/lib/rules_core/block.js"(exports, module) {
    "use strict";
    module.exports = function block(state) {
      var token;
      if (state.inlineMode) {
        token = new state.Token("inline", "", 0);
        token.content = state.src;
        token.map = [0, 1];
        token.children = [];
        state.tokens.push(token);
      } else {
        state.md.block.parse(state.src, state.md, state.env, state.tokens);
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/inline.js
var require_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_core/inline.js"(exports, module) {
    "use strict";
    module.exports = function inline(state) {
      var tokens = state.tokens, tok, i, l;
      for (i = 0, l = tokens.length; i < l; i++) {
        tok = tokens[i];
        if (tok.type === "inline") {
          state.md.inline.parse(tok.content, state.md, state.env, tok.children);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/linkify.js
var require_linkify = __commonJS({
  "node_modules/markdown-it/lib/rules_core/linkify.js"(exports, module) {
    "use strict";
    var arrayReplaceAt = require_utils().arrayReplaceAt;
    function isLinkOpen(str) {
      return /^<a[>\s]/i.test(str);
    }
    function isLinkClose(str) {
      return /^<\/a\s*>/i.test(str);
    }
    module.exports = function linkify(state) {
      var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
      if (!state.md.options.linkify) {
        return;
      }
      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
          continue;
        }
        tokens = blockTokens[j].children;
        htmlLinkLevel = 0;
        for (i = tokens.length - 1; i >= 0; i--) {
          currentToken = tokens[i];
          if (currentToken.type === "link_close") {
            i--;
            while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
              i--;
            }
            continue;
          }
          if (currentToken.type === "html_inline") {
            if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
              htmlLinkLevel--;
            }
            if (isLinkClose(currentToken.content)) {
              htmlLinkLevel++;
            }
          }
          if (htmlLinkLevel > 0) {
            continue;
          }
          if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
            text = currentToken.content;
            links = state.md.linkify.match(text);
            nodes = [];
            level = currentToken.level;
            lastPos = 0;
            for (ln = 0; ln < links.length; ln++) {
              url = links[ln].url;
              fullUrl = state.md.normalizeLink(url);
              if (!state.md.validateLink(fullUrl)) {
                continue;
              }
              urlText = links[ln].text;
              if (!links[ln].schema) {
                urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
              } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
                urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
              } else {
                urlText = state.md.normalizeLinkText(urlText);
              }
              pos = links[ln].index;
              if (pos > lastPos) {
                token = new state.Token("text", "", 0);
                token.content = text.slice(lastPos, pos);
                token.level = level;
                nodes.push(token);
              }
              token = new state.Token("link_open", "a", 1);
              token.attrs = [["href", fullUrl]];
              token.level = level++;
              token.markup = "linkify";
              token.info = "auto";
              nodes.push(token);
              token = new state.Token("text", "", 0);
              token.content = urlText;
              token.level = level;
              nodes.push(token);
              token = new state.Token("link_close", "a", -1);
              token.level = --level;
              token.markup = "linkify";
              token.info = "auto";
              nodes.push(token);
              lastPos = links[ln].lastIndex;
            }
            if (lastPos < text.length) {
              token = new state.Token("text", "", 0);
              token.content = text.slice(lastPos);
              token.level = level;
              nodes.push(token);
            }
            blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
          }
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/replacements.js
var require_replacements = __commonJS({
  "node_modules/markdown-it/lib/rules_core/replacements.js"(exports, module) {
    "use strict";
    var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
    var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;
    var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
    var SCOPED_ABBR = {
      c: "\xA9",
      r: "\xAE",
      p: "\xA7",
      tm: "\u2122"
    };
    function replaceFn(match, name) {
      return SCOPED_ABBR[name.toLowerCase()];
    }
    function replace_scoped(inlineTokens) {
      var i, token, inside_autolink = 0;
      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];
        if (token.type === "text" && !inside_autolink) {
          token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
        }
        if (token.type === "link_open" && token.info === "auto") {
          inside_autolink--;
        }
        if (token.type === "link_close" && token.info === "auto") {
          inside_autolink++;
        }
      }
    }
    function replace_rare(inlineTokens) {
      var i, token, inside_autolink = 0;
      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];
        if (token.type === "text" && !inside_autolink) {
          if (RARE_RE.test(token.content)) {
            token.content = token.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013");
          }
        }
        if (token.type === "link_open" && token.info === "auto") {
          inside_autolink--;
        }
        if (token.type === "link_close" && token.info === "auto") {
          inside_autolink++;
        }
      }
    }
    module.exports = function replace(state) {
      var blkIdx;
      if (!state.md.options.typographer) {
        return;
      }
      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== "inline") {
          continue;
        }
        if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
          replace_scoped(state.tokens[blkIdx].children);
        }
        if (RARE_RE.test(state.tokens[blkIdx].content)) {
          replace_rare(state.tokens[blkIdx].children);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/smartquotes.js
var require_smartquotes = __commonJS({
  "node_modules/markdown-it/lib/rules_core/smartquotes.js"(exports, module) {
    "use strict";
    var isWhiteSpace = require_utils().isWhiteSpace;
    var isPunctChar = require_utils().isPunctChar;
    var isMdAsciiPunct = require_utils().isMdAsciiPunct;
    var QUOTE_TEST_RE = /['"]/;
    var QUOTE_RE = /['"]/g;
    var APOSTROPHE = "\u2019";
    function replaceAt(str, index2, ch) {
      return str.substr(0, index2) + ch + str.substr(index2 + 1);
    }
    function process_inlines(tokens, state) {
      var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack2, openQuote, closeQuote;
      stack2 = [];
      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        thisLevel = tokens[i].level;
        for (j = stack2.length - 1; j >= 0; j--) {
          if (stack2[j].level <= thisLevel) {
            break;
          }
        }
        stack2.length = j + 1;
        if (token.type !== "text") {
          continue;
        }
        text = token.content;
        pos = 0;
        max = text.length;
        OUTER:
          while (pos < max) {
            QUOTE_RE.lastIndex = pos;
            t = QUOTE_RE.exec(text);
            if (!t) {
              break;
            }
            canOpen = canClose = true;
            pos = t.index + 1;
            isSingle = t[0] === "'";
            lastChar = 32;
            if (t.index - 1 >= 0) {
              lastChar = text.charCodeAt(t.index - 1);
            } else {
              for (j = i - 1; j >= 0; j--) {
                if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                  break;
                if (!tokens[j].content)
                  continue;
                lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
                break;
              }
            }
            nextChar = 32;
            if (pos < max) {
              nextChar = text.charCodeAt(pos);
            } else {
              for (j = i + 1; j < tokens.length; j++) {
                if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                  break;
                if (!tokens[j].content)
                  continue;
                nextChar = tokens[j].content.charCodeAt(0);
                break;
              }
            }
            isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
            isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
            isLastWhiteSpace = isWhiteSpace(lastChar);
            isNextWhiteSpace = isWhiteSpace(nextChar);
            if (isNextWhiteSpace) {
              canOpen = false;
            } else if (isNextPunctChar) {
              if (!(isLastWhiteSpace || isLastPunctChar)) {
                canOpen = false;
              }
            }
            if (isLastWhiteSpace) {
              canClose = false;
            } else if (isLastPunctChar) {
              if (!(isNextWhiteSpace || isNextPunctChar)) {
                canClose = false;
              }
            }
            if (nextChar === 34 && t[0] === '"') {
              if (lastChar >= 48 && lastChar <= 57) {
                canClose = canOpen = false;
              }
            }
            if (canOpen && canClose) {
              canOpen = isLastPunctChar;
              canClose = isNextPunctChar;
            }
            if (!canOpen && !canClose) {
              if (isSingle) {
                token.content = replaceAt(token.content, t.index, APOSTROPHE);
              }
              continue;
            }
            if (canClose) {
              for (j = stack2.length - 1; j >= 0; j--) {
                item = stack2[j];
                if (stack2[j].level < thisLevel) {
                  break;
                }
                if (item.single === isSingle && stack2[j].level === thisLevel) {
                  item = stack2[j];
                  if (isSingle) {
                    openQuote = state.md.options.quotes[2];
                    closeQuote = state.md.options.quotes[3];
                  } else {
                    openQuote = state.md.options.quotes[0];
                    closeQuote = state.md.options.quotes[1];
                  }
                  token.content = replaceAt(token.content, t.index, closeQuote);
                  tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
                  pos += closeQuote.length - 1;
                  if (item.token === i) {
                    pos += openQuote.length - 1;
                  }
                  text = token.content;
                  max = text.length;
                  stack2.length = j;
                  continue OUTER;
                }
              }
            }
            if (canOpen) {
              stack2.push({
                token: i,
                pos: t.index,
                single: isSingle,
                level: thisLevel
              });
            } else if (canClose && isSingle) {
              token.content = replaceAt(token.content, t.index, APOSTROPHE);
            }
          }
      }
    }
    module.exports = function smartquotes(state) {
      var blkIdx;
      if (!state.md.options.typographer) {
        return;
      }
      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
          continue;
        }
        process_inlines(state.tokens[blkIdx].children, state);
      }
    };
  }
});

// node_modules/markdown-it/lib/token.js
var require_token = __commonJS({
  "node_modules/markdown-it/lib/token.js"(exports, module) {
    "use strict";
    function Token(type, tag, nesting) {
      this.type = type;
      this.tag = tag;
      this.attrs = null;
      this.map = null;
      this.nesting = nesting;
      this.level = 0;
      this.children = null;
      this.content = "";
      this.markup = "";
      this.info = "";
      this.meta = null;
      this.block = false;
      this.hidden = false;
    }
    Token.prototype.attrIndex = function attrIndex(name) {
      var attrs, i, len;
      if (!this.attrs) {
        return -1;
      }
      attrs = this.attrs;
      for (i = 0, len = attrs.length; i < len; i++) {
        if (attrs[i][0] === name) {
          return i;
        }
      }
      return -1;
    };
    Token.prototype.attrPush = function attrPush(attrData) {
      if (this.attrs) {
        this.attrs.push(attrData);
      } else {
        this.attrs = [attrData];
      }
    };
    Token.prototype.attrSet = function attrSet(name, value) {
      var idx = this.attrIndex(name), attrData = [name, value];
      if (idx < 0) {
        this.attrPush(attrData);
      } else {
        this.attrs[idx] = attrData;
      }
    };
    Token.prototype.attrGet = function attrGet(name) {
      var idx = this.attrIndex(name), value = null;
      if (idx >= 0) {
        value = this.attrs[idx][1];
      }
      return value;
    };
    Token.prototype.attrJoin = function attrJoin(name, value) {
      var idx = this.attrIndex(name);
      if (idx < 0) {
        this.attrPush([name, value]);
      } else {
        this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
      }
    };
    module.exports = Token;
  }
});

// node_modules/markdown-it/lib/rules_core/state_core.js
var require_state_core = __commonJS({
  "node_modules/markdown-it/lib/rules_core/state_core.js"(exports, module) {
    "use strict";
    var Token = require_token();
    function StateCore(src, md, env) {
      this.src = src;
      this.env = env;
      this.tokens = [];
      this.inlineMode = false;
      this.md = md;
    }
    StateCore.prototype.Token = Token;
    module.exports = StateCore;
  }
});

// node_modules/markdown-it/lib/parser_core.js
var require_parser_core = __commonJS({
  "node_modules/markdown-it/lib/parser_core.js"(exports, module) {
    "use strict";
    var Ruler = require_ruler();
    var _rules = [
      ["normalize", require_normalize()],
      ["block", require_block()],
      ["inline", require_inline()],
      ["linkify", require_linkify()],
      ["replacements", require_replacements()],
      ["smartquotes", require_smartquotes()]
    ];
    function Core() {
      this.ruler = new Ruler();
      for (var i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1]);
      }
    }
    Core.prototype.process = function(state) {
      var i, l, rules;
      rules = this.ruler.getRules("");
      for (i = 0, l = rules.length; i < l; i++) {
        rules[i](state);
      }
    };
    Core.prototype.State = require_state_core();
    module.exports = Core;
  }
});

// node_modules/markdown-it/lib/rules_block/table.js
var require_table = __commonJS({
  "node_modules/markdown-it/lib/rules_block/table.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    function getLine(state, line) {
      var pos = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
      return state.src.substr(pos, max - pos);
    }
    function escapedSplit(str) {
      var result = [], pos = 0, max = str.length, ch, isEscaped = false, lastPos = 0, current = "";
      ch = str.charCodeAt(pos);
      while (pos < max) {
        if (ch === 124) {
          if (!isEscaped) {
            result.push(current + str.substring(lastPos, pos));
            current = "";
            lastPos = pos + 1;
          } else {
            current += str.substring(lastPos, pos - 1);
            lastPos = pos;
          }
        }
        isEscaped = ch === 92;
        pos++;
        ch = str.charCodeAt(pos);
      }
      result.push(current + str.substring(lastPos));
      return result;
    }
    module.exports = function table(state, startLine, endLine, silent) {
      var ch, lineText, pos, i, l, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
      if (startLine + 2 > endLine) {
        return false;
      }
      nextLine = startLine + 1;
      if (state.sCount[nextLine] < state.blkIndent) {
        return false;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        return false;
      }
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      if (pos >= state.eMarks[nextLine]) {
        return false;
      }
      firstCh = state.src.charCodeAt(pos++);
      if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
        return false;
      }
      if (pos >= state.eMarks[nextLine]) {
        return false;
      }
      secondCh = state.src.charCodeAt(pos++);
      if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) {
        return false;
      }
      if (firstCh === 45 && isSpace(secondCh)) {
        return false;
      }
      while (pos < state.eMarks[nextLine]) {
        ch = state.src.charCodeAt(pos);
        if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
          return false;
        }
        pos++;
      }
      lineText = getLine(state, startLine + 1);
      columns = lineText.split("|");
      aligns = [];
      for (i = 0; i < columns.length; i++) {
        t = columns[i].trim();
        if (!t) {
          if (i === 0 || i === columns.length - 1) {
            continue;
          } else {
            return false;
          }
        }
        if (!/^:?-+:?$/.test(t)) {
          return false;
        }
        if (t.charCodeAt(t.length - 1) === 58) {
          aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
        } else if (t.charCodeAt(0) === 58) {
          aligns.push("left");
        } else {
          aligns.push("");
        }
      }
      lineText = getLine(state, startLine).trim();
      if (lineText.indexOf("|") === -1) {
        return false;
      }
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      columns = escapedSplit(lineText);
      if (columns.length && columns[0] === "")
        columns.shift();
      if (columns.length && columns[columns.length - 1] === "")
        columns.pop();
      columnCount = columns.length;
      if (columnCount === 0 || columnCount !== aligns.length) {
        return false;
      }
      if (silent) {
        return true;
      }
      oldParentType = state.parentType;
      state.parentType = "table";
      terminatorRules = state.md.block.ruler.getRules("blockquote");
      token = state.push("table_open", "table", 1);
      token.map = tableLines = [startLine, 0];
      token = state.push("thead_open", "thead", 1);
      token.map = [startLine, startLine + 1];
      token = state.push("tr_open", "tr", 1);
      token.map = [startLine, startLine + 1];
      for (i = 0; i < columns.length; i++) {
        token = state.push("th_open", "th", 1);
        if (aligns[i]) {
          token.attrs = [["style", "text-align:" + aligns[i]]];
        }
        token = state.push("inline", "", 0);
        token.content = columns[i].trim();
        token.children = [];
        token = state.push("th_close", "th", -1);
      }
      token = state.push("tr_close", "tr", -1);
      token = state.push("thead_close", "thead", -1);
      for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
        lineText = getLine(state, nextLine).trim();
        if (!lineText) {
          break;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          break;
        }
        columns = escapedSplit(lineText);
        if (columns.length && columns[0] === "")
          columns.shift();
        if (columns.length && columns[columns.length - 1] === "")
          columns.pop();
        if (nextLine === startLine + 2) {
          token = state.push("tbody_open", "tbody", 1);
          token.map = tbodyLines = [startLine + 2, 0];
        }
        token = state.push("tr_open", "tr", 1);
        token.map = [nextLine, nextLine + 1];
        for (i = 0; i < columnCount; i++) {
          token = state.push("td_open", "td", 1);
          if (aligns[i]) {
            token.attrs = [["style", "text-align:" + aligns[i]]];
          }
          token = state.push("inline", "", 0);
          token.content = columns[i] ? columns[i].trim() : "";
          token.children = [];
          token = state.push("td_close", "td", -1);
        }
        token = state.push("tr_close", "tr", -1);
      }
      if (tbodyLines) {
        token = state.push("tbody_close", "tbody", -1);
        tbodyLines[1] = nextLine;
      }
      token = state.push("table_close", "table", -1);
      tableLines[1] = nextLine;
      state.parentType = oldParentType;
      state.line = nextLine;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/code.js
var require_code = __commonJS({
  "node_modules/markdown-it/lib/rules_block/code.js"(exports, module) {
    "use strict";
    module.exports = function code(state, startLine, endLine) {
      var nextLine, last, token;
      if (state.sCount[startLine] - state.blkIndent < 4) {
        return false;
      }
      last = nextLine = startLine + 1;
      while (nextLine < endLine) {
        if (state.isEmpty(nextLine)) {
          nextLine++;
          continue;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          nextLine++;
          last = nextLine;
          continue;
        }
        break;
      }
      state.line = last;
      token = state.push("code_block", "code", 0);
      token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
      token.map = [startLine, state.line];
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/fence.js
var require_fence = __commonJS({
  "node_modules/markdown-it/lib/rules_block/fence.js"(exports, module) {
    "use strict";
    module.exports = function fence(state, startLine, endLine, silent) {
      var marker, len, params, nextLine, mem, token, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (pos + 3 > max) {
        return false;
      }
      marker = state.src.charCodeAt(pos);
      if (marker !== 126 && marker !== 96) {
        return false;
      }
      mem = pos;
      pos = state.skipChars(pos, marker);
      len = pos - mem;
      if (len < 3) {
        return false;
      }
      markup = state.src.slice(mem, pos);
      params = state.src.slice(pos, max);
      if (marker === 96) {
        if (params.indexOf(String.fromCharCode(marker)) >= 0) {
          return false;
        }
      }
      if (silent) {
        return true;
      }
      nextLine = startLine;
      for (; ; ) {
        nextLine++;
        if (nextLine >= endLine) {
          break;
        }
        pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (pos < max && state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        if (state.src.charCodeAt(pos) !== marker) {
          continue;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          continue;
        }
        pos = state.skipChars(pos, marker);
        if (pos - mem < len) {
          continue;
        }
        pos = state.skipSpaces(pos);
        if (pos < max) {
          continue;
        }
        haveEndMarker = true;
        break;
      }
      len = state.sCount[startLine];
      state.line = nextLine + (haveEndMarker ? 1 : 0);
      token = state.push("fence", "code", 0);
      token.info = params;
      token.content = state.getLines(startLine + 1, nextLine, len, true);
      token.markup = markup;
      token.map = [startLine, state.line];
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/blockquote.js
var require_blockquote = __commonJS({
  "node_modules/markdown-it/lib/rules_block/blockquote.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    module.exports = function blockquote(state, startLine, endLine, silent) {
      var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (state.src.charCodeAt(pos++) !== 62) {
        return false;
      }
      if (silent) {
        return true;
      }
      initial = offset = state.sCount[startLine] + 1;
      if (state.src.charCodeAt(pos) === 32) {
        pos++;
        initial++;
        offset++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 9) {
        spaceAfterMarker = true;
        if ((state.bsCount[startLine] + offset) % 4 === 3) {
          pos++;
          initial++;
          offset++;
          adjustTab = false;
        } else {
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }
      oldBMarks = [state.bMarks[startLine]];
      state.bMarks[startLine] = pos;
      while (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (isSpace(ch)) {
          if (ch === 9) {
            offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }
        pos++;
      }
      oldBSCount = [state.bsCount[startLine]];
      state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
      lastLineEmpty = pos >= max;
      oldSCount = [state.sCount[startLine]];
      state.sCount[startLine] = offset - initial;
      oldTShift = [state.tShift[startLine]];
      state.tShift[startLine] = pos - state.bMarks[startLine];
      terminatorRules = state.md.block.ruler.getRules("blockquote");
      oldParentType = state.parentType;
      state.parentType = "blockquote";
      for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
        isOutdented = state.sCount[nextLine] < state.blkIndent;
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (pos >= max) {
          break;
        }
        if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
          initial = offset = state.sCount[nextLine] + 1;
          if (state.src.charCodeAt(pos) === 32) {
            pos++;
            initial++;
            offset++;
            adjustTab = false;
            spaceAfterMarker = true;
          } else if (state.src.charCodeAt(pos) === 9) {
            spaceAfterMarker = true;
            if ((state.bsCount[nextLine] + offset) % 4 === 3) {
              pos++;
              initial++;
              offset++;
              adjustTab = false;
            } else {
              adjustTab = true;
            }
          } else {
            spaceAfterMarker = false;
          }
          oldBMarks.push(state.bMarks[nextLine]);
          state.bMarks[nextLine] = pos;
          while (pos < max) {
            ch = state.src.charCodeAt(pos);
            if (isSpace(ch)) {
              if (ch === 9) {
                offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
              } else {
                offset++;
              }
            } else {
              break;
            }
            pos++;
          }
          lastLineEmpty = pos >= max;
          oldBSCount.push(state.bsCount[nextLine]);
          state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] = offset - initial;
          oldTShift.push(state.tShift[nextLine]);
          state.tShift[nextLine] = pos - state.bMarks[nextLine];
          continue;
        }
        if (lastLineEmpty) {
          break;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          state.lineMax = nextLine;
          if (state.blkIndent !== 0) {
            oldBMarks.push(state.bMarks[nextLine]);
            oldBSCount.push(state.bsCount[nextLine]);
            oldTShift.push(state.tShift[nextLine]);
            oldSCount.push(state.sCount[nextLine]);
            state.sCount[nextLine] -= state.blkIndent;
          }
          break;
        }
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] = -1;
      }
      oldIndent = state.blkIndent;
      state.blkIndent = 0;
      token = state.push("blockquote_open", "blockquote", 1);
      token.markup = ">";
      token.map = lines = [startLine, 0];
      state.md.block.tokenize(state, startLine, nextLine);
      token = state.push("blockquote_close", "blockquote", -1);
      token.markup = ">";
      state.lineMax = oldLineMax;
      state.parentType = oldParentType;
      lines[1] = state.line;
      for (i = 0; i < oldTShift.length; i++) {
        state.bMarks[i + startLine] = oldBMarks[i];
        state.tShift[i + startLine] = oldTShift[i];
        state.sCount[i + startLine] = oldSCount[i];
        state.bsCount[i + startLine] = oldBSCount[i];
      }
      state.blkIndent = oldIndent;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/hr.js
var require_hr = __commonJS({
  "node_modules/markdown-it/lib/rules_block/hr.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    module.exports = function hr(state, startLine, endLine, silent) {
      var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      marker = state.src.charCodeAt(pos++);
      if (marker !== 42 && marker !== 45 && marker !== 95) {
        return false;
      }
      cnt = 1;
      while (pos < max) {
        ch = state.src.charCodeAt(pos++);
        if (ch !== marker && !isSpace(ch)) {
          return false;
        }
        if (ch === marker) {
          cnt++;
        }
      }
      if (cnt < 3) {
        return false;
      }
      if (silent) {
        return true;
      }
      state.line = startLine + 1;
      token = state.push("hr", "hr", 0);
      token.map = [startLine, state.line];
      token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/list.js
var require_list = __commonJS({
  "node_modules/markdown-it/lib/rules_block/list.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    function skipBulletListMarker(state, startLine) {
      var marker, pos, max, ch;
      pos = state.bMarks[startLine] + state.tShift[startLine];
      max = state.eMarks[startLine];
      marker = state.src.charCodeAt(pos++);
      if (marker !== 42 && marker !== 45 && marker !== 43) {
        return -1;
      }
      if (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          return -1;
        }
      }
      return pos;
    }
    function skipOrderedListMarker(state, startLine) {
      var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max = state.eMarks[startLine];
      if (pos + 1 >= max) {
        return -1;
      }
      ch = state.src.charCodeAt(pos++);
      if (ch < 48 || ch > 57) {
        return -1;
      }
      for (; ; ) {
        if (pos >= max) {
          return -1;
        }
        ch = state.src.charCodeAt(pos++);
        if (ch >= 48 && ch <= 57) {
          if (pos - start >= 10) {
            return -1;
          }
          continue;
        }
        if (ch === 41 || ch === 46) {
          break;
        }
        return -1;
      }
      if (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          return -1;
        }
      }
      return pos;
    }
    function markTightParagraphs(state, idx) {
      var i, l, level = state.level + 2;
      for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
        if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
          state.tokens[i + 2].hidden = true;
          state.tokens[i].hidden = true;
          i += 2;
        }
      }
    }
    module.exports = function list(state, startLine, endLine, silent) {
      var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max, nextLine, offset, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token, isTerminatingParagraph = false, tight = true;
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
        return false;
      }
      if (silent && state.parentType === "paragraph") {
        if (state.sCount[startLine] >= state.blkIndent) {
          isTerminatingParagraph = true;
        }
      }
      if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
        isOrdered = true;
        start = state.bMarks[startLine] + state.tShift[startLine];
        markerValue = Number(state.src.slice(start, posAfterMarker - 1));
        if (isTerminatingParagraph && markerValue !== 1)
          return false;
      } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
        isOrdered = false;
      } else {
        return false;
      }
      if (isTerminatingParagraph) {
        if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine])
          return false;
      }
      markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
      if (silent) {
        return true;
      }
      listTokIdx = state.tokens.length;
      if (isOrdered) {
        token = state.push("ordered_list_open", "ol", 1);
        if (markerValue !== 1) {
          token.attrs = [["start", markerValue]];
        }
      } else {
        token = state.push("bullet_list_open", "ul", 1);
      }
      token.map = listLines = [startLine, 0];
      token.markup = String.fromCharCode(markerCharCode);
      nextLine = startLine;
      prevEmptyEnd = false;
      terminatorRules = state.md.block.ruler.getRules("list");
      oldParentType = state.parentType;
      state.parentType = "list";
      while (nextLine < endLine) {
        pos = posAfterMarker;
        max = state.eMarks[nextLine];
        initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
        while (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (ch === 9) {
            offset += 4 - (offset + state.bsCount[nextLine]) % 4;
          } else if (ch === 32) {
            offset++;
          } else {
            break;
          }
          pos++;
        }
        contentStart = pos;
        if (contentStart >= max) {
          indentAfterMarker = 1;
        } else {
          indentAfterMarker = offset - initial;
        }
        if (indentAfterMarker > 4) {
          indentAfterMarker = 1;
        }
        indent = initial + indentAfterMarker;
        token = state.push("list_item_open", "li", 1);
        token.markup = String.fromCharCode(markerCharCode);
        token.map = itemLines = [startLine, 0];
        if (isOrdered) {
          token.info = state.src.slice(start, posAfterMarker - 1);
        }
        oldTight = state.tight;
        oldTShift = state.tShift[startLine];
        oldSCount = state.sCount[startLine];
        oldListIndent = state.listIndent;
        state.listIndent = state.blkIndent;
        state.blkIndent = indent;
        state.tight = true;
        state.tShift[startLine] = contentStart - state.bMarks[startLine];
        state.sCount[startLine] = offset;
        if (contentStart >= max && state.isEmpty(startLine + 1)) {
          state.line = Math.min(state.line + 2, endLine);
        } else {
          state.md.block.tokenize(state, startLine, endLine, true);
        }
        if (!state.tight || prevEmptyEnd) {
          tight = false;
        }
        prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
        state.blkIndent = state.listIndent;
        state.listIndent = oldListIndent;
        state.tShift[startLine] = oldTShift;
        state.sCount[startLine] = oldSCount;
        state.tight = oldTight;
        token = state.push("list_item_close", "li", -1);
        token.markup = String.fromCharCode(markerCharCode);
        nextLine = startLine = state.line;
        itemLines[1] = nextLine;
        contentStart = state.bMarks[startLine];
        if (nextLine >= endLine) {
          break;
        }
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          break;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
        if (isOrdered) {
          posAfterMarker = skipOrderedListMarker(state, nextLine);
          if (posAfterMarker < 0) {
            break;
          }
          start = state.bMarks[nextLine] + state.tShift[nextLine];
        } else {
          posAfterMarker = skipBulletListMarker(state, nextLine);
          if (posAfterMarker < 0) {
            break;
          }
        }
        if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
          break;
        }
      }
      if (isOrdered) {
        token = state.push("ordered_list_close", "ol", -1);
      } else {
        token = state.push("bullet_list_close", "ul", -1);
      }
      token.markup = String.fromCharCode(markerCharCode);
      listLines[1] = nextLine;
      state.line = nextLine;
      state.parentType = oldParentType;
      if (tight) {
        markTightParagraphs(state, listTokIdx);
      }
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/reference.js
var require_reference = __commonJS({
  "node_modules/markdown-it/lib/rules_block/reference.js"(exports, module) {
    "use strict";
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = function reference(state, startLine, _endLine, silent) {
      var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], nextLine = startLine + 1;
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (state.src.charCodeAt(pos) !== 91) {
        return false;
      }
      while (++pos < max) {
        if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
          if (pos + 1 === max) {
            return false;
          }
          if (state.src.charCodeAt(pos + 1) !== 58) {
            return false;
          }
          break;
        }
      }
      endLine = state.lineMax;
      terminatorRules = state.md.block.ruler.getRules("reference");
      oldParentType = state.parentType;
      state.parentType = "reference";
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      max = str.length;
      for (pos = 1; pos < max; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 91) {
          return false;
        } else if (ch === 93) {
          labelEnd = pos;
          break;
        } else if (ch === 10) {
          lines++;
        } else if (ch === 92) {
          pos++;
          if (pos < max && str.charCodeAt(pos) === 10) {
            lines++;
          }
        }
      }
      if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
        return false;
      }
      for (pos = labelEnd + 2; pos < max; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 10) {
          lines++;
        } else if (isSpace(ch)) {
        } else {
          break;
        }
      }
      res = state.md.helpers.parseLinkDestination(str, pos, max);
      if (!res.ok) {
        return false;
      }
      href = state.md.normalizeLink(res.str);
      if (!state.md.validateLink(href)) {
        return false;
      }
      pos = res.pos;
      lines += res.lines;
      destEndPos = pos;
      destEndLineNo = lines;
      start = pos;
      for (; pos < max; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 10) {
          lines++;
        } else if (isSpace(ch)) {
        } else {
          break;
        }
      }
      res = state.md.helpers.parseLinkTitle(str, pos, max);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        lines += res.lines;
      } else {
        title = "";
        pos = destEndPos;
        lines = destEndLineNo;
      }
      while (pos < max) {
        ch = str.charCodeAt(pos);
        if (!isSpace(ch)) {
          break;
        }
        pos++;
      }
      if (pos < max && str.charCodeAt(pos) !== 10) {
        if (title) {
          title = "";
          pos = destEndPos;
          lines = destEndLineNo;
          while (pos < max) {
            ch = str.charCodeAt(pos);
            if (!isSpace(ch)) {
              break;
            }
            pos++;
          }
        }
      }
      if (pos < max && str.charCodeAt(pos) !== 10) {
        return false;
      }
      label = normalizeReference(str.slice(1, labelEnd));
      if (!label) {
        return false;
      }
      if (silent) {
        return true;
      }
      if (typeof state.env.references === "undefined") {
        state.env.references = {};
      }
      if (typeof state.env.references[label] === "undefined") {
        state.env.references[label] = { title, href };
      }
      state.parentType = oldParentType;
      state.line = startLine + lines + 1;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/common/html_blocks.js
var require_html_blocks = __commonJS({
  "node_modules/markdown-it/lib/common/html_blocks.js"(exports, module) {
    "use strict";
    module.exports = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "section",
      "source",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul"
    ];
  }
});

// node_modules/markdown-it/lib/common/html_re.js
var require_html_re = __commonJS({
  "node_modules/markdown-it/lib/common/html_re.js"(exports, module) {
    "use strict";
    var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
    var unquoted = "[^\"'=<>`\\x00-\\x20]+";
    var single_quoted = "'[^']*'";
    var double_quoted = '"[^"]*"';
    var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
    var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
    var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
    var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
    var comment = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
    var processing = "<[?][\\s\\S]*?[?]>";
    var declaration = "<![A-Z]+\\s+[^>]*>";
    var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
    var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
    var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
    module.exports.HTML_TAG_RE = HTML_TAG_RE;
    module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
  }
});

// node_modules/markdown-it/lib/rules_block/html_block.js
var require_html_block = __commonJS({
  "node_modules/markdown-it/lib/rules_block/html_block.js"(exports, module) {
    "use strict";
    var block_names = require_html_blocks();
    var HTML_OPEN_CLOSE_TAG_RE = require_html_re().HTML_OPEN_CLOSE_TAG_RE;
    var HTML_SEQUENCES = [
      [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
      [/^<!--/, /-->/, true],
      [/^<\?/, /\?>/, true],
      [/^<![A-Z]/, />/, true],
      [/^<!\[CDATA\[/, /\]\]>/, true],
      [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
      [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
    ];
    module.exports = function html_block(state, startLine, endLine, silent) {
      var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (!state.md.options.html) {
        return false;
      }
      if (state.src.charCodeAt(pos) !== 60) {
        return false;
      }
      lineText = state.src.slice(pos, max);
      for (i = 0; i < HTML_SEQUENCES.length; i++) {
        if (HTML_SEQUENCES[i][0].test(lineText)) {
          break;
        }
      }
      if (i === HTML_SEQUENCES.length) {
        return false;
      }
      if (silent) {
        return HTML_SEQUENCES[i][2];
      }
      nextLine = startLine + 1;
      if (!HTML_SEQUENCES[i][1].test(lineText)) {
        for (; nextLine < endLine; nextLine++) {
          if (state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          lineText = state.src.slice(pos, max);
          if (HTML_SEQUENCES[i][1].test(lineText)) {
            if (lineText.length !== 0) {
              nextLine++;
            }
            break;
          }
        }
      }
      state.line = nextLine;
      token = state.push("html_block", "", 0);
      token.map = [startLine, nextLine];
      token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/heading.js
var require_heading = __commonJS({
  "node_modules/markdown-it/lib/rules_block/heading.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    module.exports = function heading(state, startLine, endLine, silent) {
      var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      ch = state.src.charCodeAt(pos);
      if (ch !== 35 || pos >= max) {
        return false;
      }
      level = 1;
      ch = state.src.charCodeAt(++pos);
      while (ch === 35 && pos < max && level <= 6) {
        level++;
        ch = state.src.charCodeAt(++pos);
      }
      if (level > 6 || pos < max && !isSpace(ch)) {
        return false;
      }
      if (silent) {
        return true;
      }
      max = state.skipSpacesBack(max, pos);
      tmp = state.skipCharsBack(max, 35, pos);
      if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
        max = tmp;
      }
      state.line = startLine + 1;
      token = state.push("heading_open", "h" + String(level), 1);
      token.markup = "########".slice(0, level);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = state.src.slice(pos, max).trim();
      token.map = [startLine, state.line];
      token.children = [];
      token = state.push("heading_close", "h" + String(level), -1);
      token.markup = "########".slice(0, level);
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/lheading.js
var require_lheading = __commonJS({
  "node_modules/markdown-it/lib/rules_block/lheading.js"(exports, module) {
    "use strict";
    module.exports = function lheading(state, startLine, endLine) {
      var content, terminate, i, l, token, pos, max, level, marker, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      oldParentType = state.parentType;
      state.parentType = "paragraph";
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] >= state.blkIndent) {
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          if (pos < max) {
            marker = state.src.charCodeAt(pos);
            if (marker === 45 || marker === 61) {
              pos = state.skipChars(pos, marker);
              pos = state.skipSpaces(pos);
              if (pos >= max) {
                level = marker === 61 ? 1 : 2;
                break;
              }
            }
          }
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      if (!level) {
        return false;
      }
      content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      state.line = nextLine + 1;
      token = state.push("heading_open", "h" + String(level), 1);
      token.markup = String.fromCharCode(marker);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = content;
      token.map = [startLine, state.line - 1];
      token.children = [];
      token = state.push("heading_close", "h" + String(level), -1);
      token.markup = String.fromCharCode(marker);
      state.parentType = oldParentType;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/paragraph.js
var require_paragraph = __commonJS({
  "node_modules/markdown-it/lib/rules_block/paragraph.js"(exports, module) {
    "use strict";
    module.exports = function paragraph(state, startLine) {
      var content, terminate, i, l, token, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
      oldParentType = state.parentType;
      state.parentType = "paragraph";
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      state.line = nextLine;
      token = state.push("paragraph_open", "p", 1);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = content;
      token.map = [startLine, state.line];
      token.children = [];
      token = state.push("paragraph_close", "p", -1);
      state.parentType = oldParentType;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/state_block.js
var require_state_block = __commonJS({
  "node_modules/markdown-it/lib/rules_block/state_block.js"(exports, module) {
    "use strict";
    var Token = require_token();
    var isSpace = require_utils().isSpace;
    function StateBlock(src, md, env, tokens) {
      var ch, s, start, pos, len, indent, offset, indent_found;
      this.src = src;
      this.md = md;
      this.env = env;
      this.tokens = tokens;
      this.bMarks = [];
      this.eMarks = [];
      this.tShift = [];
      this.sCount = [];
      this.bsCount = [];
      this.blkIndent = 0;
      this.line = 0;
      this.lineMax = 0;
      this.tight = false;
      this.ddIndent = -1;
      this.listIndent = -1;
      this.parentType = "root";
      this.level = 0;
      this.result = "";
      s = this.src;
      indent_found = false;
      for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
        ch = s.charCodeAt(pos);
        if (!indent_found) {
          if (isSpace(ch)) {
            indent++;
            if (ch === 9) {
              offset += 4 - offset % 4;
            } else {
              offset++;
            }
            continue;
          } else {
            indent_found = true;
          }
        }
        if (ch === 10 || pos === len - 1) {
          if (ch !== 10) {
            pos++;
          }
          this.bMarks.push(start);
          this.eMarks.push(pos);
          this.tShift.push(indent);
          this.sCount.push(offset);
          this.bsCount.push(0);
          indent_found = false;
          indent = 0;
          offset = 0;
          start = pos + 1;
        }
      }
      this.bMarks.push(s.length);
      this.eMarks.push(s.length);
      this.tShift.push(0);
      this.sCount.push(0);
      this.bsCount.push(0);
      this.lineMax = this.bMarks.length - 1;
    }
    StateBlock.prototype.push = function(type, tag, nesting) {
      var token = new Token(type, tag, nesting);
      token.block = true;
      if (nesting < 0)
        this.level--;
      token.level = this.level;
      if (nesting > 0)
        this.level++;
      this.tokens.push(token);
      return token;
    };
    StateBlock.prototype.isEmpty = function isEmpty(line) {
      return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
    };
    StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
      for (var max = this.lineMax; from < max; from++) {
        if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
          break;
        }
      }
      return from;
    };
    StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
      var ch;
      for (var max = this.src.length; pos < max; pos++) {
        ch = this.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          break;
        }
      }
      return pos;
    };
    StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
      if (pos <= min) {
        return pos;
      }
      while (pos > min) {
        if (!isSpace(this.src.charCodeAt(--pos))) {
          return pos + 1;
        }
      }
      return pos;
    };
    StateBlock.prototype.skipChars = function skipChars(pos, code) {
      for (var max = this.src.length; pos < max; pos++) {
        if (this.src.charCodeAt(pos) !== code) {
          break;
        }
      }
      return pos;
    };
    StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
      if (pos <= min) {
        return pos;
      }
      while (pos > min) {
        if (code !== this.src.charCodeAt(--pos)) {
          return pos + 1;
        }
      }
      return pos;
    };
    StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
      var i, lineIndent, ch, first, last, queue, lineStart, line = begin;
      if (begin >= end) {
        return "";
      }
      queue = new Array(end - begin);
      for (i = 0; line < end; line++, i++) {
        lineIndent = 0;
        lineStart = first = this.bMarks[line];
        if (line + 1 < end || keepLastLF) {
          last = this.eMarks[line] + 1;
        } else {
          last = this.eMarks[line];
        }
        while (first < last && lineIndent < indent) {
          ch = this.src.charCodeAt(first);
          if (isSpace(ch)) {
            if (ch === 9) {
              lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
            } else {
              lineIndent++;
            }
          } else if (first - lineStart < this.tShift[line]) {
            lineIndent++;
          } else {
            break;
          }
          first++;
        }
        if (lineIndent > indent) {
          queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
        } else {
          queue[i] = this.src.slice(first, last);
        }
      }
      return queue.join("");
    };
    StateBlock.prototype.Token = Token;
    module.exports = StateBlock;
  }
});

// node_modules/markdown-it/lib/parser_block.js
var require_parser_block = __commonJS({
  "node_modules/markdown-it/lib/parser_block.js"(exports, module) {
    "use strict";
    var Ruler = require_ruler();
    var _rules = [
      ["table", require_table(), ["paragraph", "reference"]],
      ["code", require_code()],
      ["fence", require_fence(), ["paragraph", "reference", "blockquote", "list"]],
      ["blockquote", require_blockquote(), ["paragraph", "reference", "blockquote", "list"]],
      ["hr", require_hr(), ["paragraph", "reference", "blockquote", "list"]],
      ["list", require_list(), ["paragraph", "reference", "blockquote"]],
      ["reference", require_reference()],
      ["html_block", require_html_block(), ["paragraph", "reference", "blockquote"]],
      ["heading", require_heading(), ["paragraph", "reference", "blockquote"]],
      ["lheading", require_lheading()],
      ["paragraph", require_paragraph()]
    ];
    function ParserBlock() {
      this.ruler = new Ruler();
      for (var i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
      }
    }
    ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
      var ok, i, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
      while (line < endLine) {
        state.line = line = state.skipEmptyLines(line);
        if (line >= endLine) {
          break;
        }
        if (state.sCount[line] < state.blkIndent) {
          break;
        }
        if (state.level >= maxNesting) {
          state.line = endLine;
          break;
        }
        for (i = 0; i < len; i++) {
          ok = rules[i](state, line, endLine, false);
          if (ok) {
            break;
          }
        }
        state.tight = !hasEmptyLines;
        if (state.isEmpty(state.line - 1)) {
          hasEmptyLines = true;
        }
        line = state.line;
        if (line < endLine && state.isEmpty(line)) {
          hasEmptyLines = true;
          line++;
          state.line = line;
        }
      }
    };
    ParserBlock.prototype.parse = function(src, md, env, outTokens) {
      var state;
      if (!src) {
        return;
      }
      state = new this.State(src, md, env, outTokens);
      this.tokenize(state, state.line, state.lineMax);
    };
    ParserBlock.prototype.State = require_state_block();
    module.exports = ParserBlock;
  }
});

// node_modules/markdown-it/lib/rules_inline/text.js
var require_text = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/text.js"(exports, module) {
    "use strict";
    function isTerminatorChar(ch) {
      switch (ch) {
        case 10:
        case 33:
        case 35:
        case 36:
        case 37:
        case 38:
        case 42:
        case 43:
        case 45:
        case 58:
        case 60:
        case 61:
        case 62:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }
    module.exports = function text(state, silent) {
      var pos = state.pos;
      while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
        pos++;
      }
      if (pos === state.pos) {
        return false;
      }
      if (!silent) {
        state.pending += state.src.slice(state.pos, pos);
      }
      state.pos = pos;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/newline.js
var require_newline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/newline.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    module.exports = function newline(state, silent) {
      var pmax, max, ws, pos = state.pos;
      if (state.src.charCodeAt(pos) !== 10) {
        return false;
      }
      pmax = state.pending.length - 1;
      max = state.posMax;
      if (!silent) {
        if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
          if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
            ws = pmax - 1;
            while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
              ws--;
            state.pending = state.pending.slice(0, ws);
            state.push("hardbreak", "br", 0);
          } else {
            state.pending = state.pending.slice(0, -1);
            state.push("softbreak", "br", 0);
          }
        } else {
          state.push("softbreak", "br", 0);
        }
      }
      pos++;
      while (pos < max && isSpace(state.src.charCodeAt(pos))) {
        pos++;
      }
      state.pos = pos;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/escape.js
var require_escape = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/escape.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    var ESCAPED = [];
    for (i = 0; i < 256; i++) {
      ESCAPED.push(0);
    }
    var i;
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
      ESCAPED[ch.charCodeAt(0)] = 1;
    });
    module.exports = function escape(state, silent) {
      var ch, pos = state.pos, max = state.posMax;
      if (state.src.charCodeAt(pos) !== 92) {
        return false;
      }
      pos++;
      if (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (ch < 256 && ESCAPED[ch] !== 0) {
          if (!silent) {
            state.pending += state.src[pos];
          }
          state.pos += 2;
          return true;
        }
        if (ch === 10) {
          if (!silent) {
            state.push("hardbreak", "br", 0);
          }
          pos++;
          while (pos < max) {
            ch = state.src.charCodeAt(pos);
            if (!isSpace(ch)) {
              break;
            }
            pos++;
          }
          state.pos = pos;
          return true;
        }
      }
      if (!silent) {
        state.pending += "\\";
      }
      state.pos++;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/backticks.js
var require_backticks = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/backticks.js"(exports, module) {
    "use strict";
    module.exports = function backtick(state, silent) {
      var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
      if (ch !== 96) {
        return false;
      }
      start = pos;
      pos++;
      max = state.posMax;
      while (pos < max && state.src.charCodeAt(pos) === 96) {
        pos++;
      }
      marker = state.src.slice(start, pos);
      openerLength = marker.length;
      if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
        if (!silent)
          state.pending += marker;
        state.pos += openerLength;
        return true;
      }
      matchStart = matchEnd = pos;
      while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
        matchEnd = matchStart + 1;
        while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
          matchEnd++;
        }
        closerLength = matchEnd - matchStart;
        if (closerLength === openerLength) {
          if (!silent) {
            token = state.push("code_inline", "code", 0);
            token.markup = marker;
            token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
          }
          state.pos = matchEnd;
          return true;
        }
        state.backticks[closerLength] = matchStart;
      }
      state.backticksScanned = true;
      if (!silent)
        state.pending += marker;
      state.pos += openerLength;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/strikethrough.js
var require_strikethrough = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/strikethrough.js"(exports, module) {
    "use strict";
    module.exports.tokenize = function strikethrough(state, silent) {
      var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
      if (silent) {
        return false;
      }
      if (marker !== 126) {
        return false;
      }
      scanned = state.scanDelims(state.pos, true);
      len = scanned.length;
      ch = String.fromCharCode(marker);
      if (len < 2) {
        return false;
      }
      if (len % 2) {
        token = state.push("text", "", 0);
        token.content = ch;
        len--;
      }
      for (i = 0; i < len; i += 2) {
        token = state.push("text", "", 0);
        token.content = ch + ch;
        state.delimiters.push({
          marker,
          length: 0,
          token: state.tokens.length - 1,
          end: -1,
          open: scanned.can_open,
          close: scanned.can_close
        });
      }
      state.pos += scanned.length;
      return true;
    };
    function postProcess(state, delimiters) {
      var i, j, startDelim, endDelim, token, loneMarkers = [], max = delimiters.length;
      for (i = 0; i < max; i++) {
        startDelim = delimiters[i];
        if (startDelim.marker !== 126) {
          continue;
        }
        if (startDelim.end === -1) {
          continue;
        }
        endDelim = delimiters[startDelim.end];
        token = state.tokens[startDelim.token];
        token.type = "s_open";
        token.tag = "s";
        token.nesting = 1;
        token.markup = "~~";
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = "s_close";
        token.tag = "s";
        token.nesting = -1;
        token.markup = "~~";
        token.content = "";
        if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
          loneMarkers.push(endDelim.token - 1);
        }
      }
      while (loneMarkers.length) {
        i = loneMarkers.pop();
        j = i + 1;
        while (j < state.tokens.length && state.tokens[j].type === "s_close") {
          j++;
        }
        j--;
        if (i !== j) {
          token = state.tokens[j];
          state.tokens[j] = state.tokens[i];
          state.tokens[i] = token;
        }
      }
    }
    module.exports.postProcess = function strikethrough(state) {
      var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
      postProcess(state, state.delimiters);
      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/emphasis.js
var require_emphasis = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/emphasis.js"(exports, module) {
    "use strict";
    module.exports.tokenize = function emphasis(state, silent) {
      var i, scanned, token, start = state.pos, marker = state.src.charCodeAt(start);
      if (silent) {
        return false;
      }
      if (marker !== 95 && marker !== 42) {
        return false;
      }
      scanned = state.scanDelims(state.pos, marker === 42);
      for (i = 0; i < scanned.length; i++) {
        token = state.push("text", "", 0);
        token.content = String.fromCharCode(marker);
        state.delimiters.push({
          marker,
          length: scanned.length,
          token: state.tokens.length - 1,
          end: -1,
          open: scanned.can_open,
          close: scanned.can_close
        });
      }
      state.pos += scanned.length;
      return true;
    };
    function postProcess(state, delimiters) {
      var i, startDelim, endDelim, token, ch, isStrong, max = delimiters.length;
      for (i = max - 1; i >= 0; i--) {
        startDelim = delimiters[i];
        if (startDelim.marker !== 95 && startDelim.marker !== 42) {
          continue;
        }
        if (startDelim.end === -1) {
          continue;
        }
        endDelim = delimiters[startDelim.end];
        isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1;
        ch = String.fromCharCode(startDelim.marker);
        token = state.tokens[startDelim.token];
        token.type = isStrong ? "strong_open" : "em_open";
        token.tag = isStrong ? "strong" : "em";
        token.nesting = 1;
        token.markup = isStrong ? ch + ch : ch;
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = isStrong ? "strong_close" : "em_close";
        token.tag = isStrong ? "strong" : "em";
        token.nesting = -1;
        token.markup = isStrong ? ch + ch : ch;
        token.content = "";
        if (isStrong) {
          state.tokens[delimiters[i - 1].token].content = "";
          state.tokens[delimiters[startDelim.end + 1].token].content = "";
          i--;
        }
      }
    }
    module.exports.postProcess = function emphasis(state) {
      var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
      postProcess(state, state.delimiters);
      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/link.js
var require_link = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/link.js"(exports, module) {
    "use strict";
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = function link(state, silent) {
      var attrs, code, label, labelEnd, labelStart, pos, res, ref, token, href = "", title = "", oldPos = state.pos, max = state.posMax, start = state.pos, parseReference = true;
      if (state.src.charCodeAt(state.pos) !== 91) {
        return false;
      }
      labelStart = state.pos + 1;
      labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
      if (labelEnd < 0) {
        return false;
      }
      pos = labelEnd + 1;
      if (pos < max && state.src.charCodeAt(pos) === 40) {
        parseReference = false;
        pos++;
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 10) {
            break;
          }
        }
        if (pos >= max) {
          return false;
        }
        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
        if (res.ok) {
          href = state.md.normalizeLink(res.str);
          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = "";
          }
          start = pos;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
          res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
          if (pos < max && start !== pos && res.ok) {
            title = res.str;
            pos = res.pos;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (!isSpace(code) && code !== 10) {
                break;
              }
            }
          }
        }
        if (pos >= max || state.src.charCodeAt(pos) !== 41) {
          parseReference = true;
        }
        pos++;
      }
      if (parseReference) {
        if (typeof state.env.references === "undefined") {
          return false;
        }
        if (pos < max && state.src.charCodeAt(pos) === 91) {
          start = pos + 1;
          pos = state.md.helpers.parseLinkLabel(state, pos);
          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
          pos = labelEnd + 1;
        }
        if (!label) {
          label = state.src.slice(labelStart, labelEnd);
        }
        ref = state.env.references[normalizeReference(label)];
        if (!ref) {
          state.pos = oldPos;
          return false;
        }
        href = ref.href;
        title = ref.title;
      }
      if (!silent) {
        state.pos = labelStart;
        state.posMax = labelEnd;
        token = state.push("link_open", "a", 1);
        token.attrs = attrs = [["href", href]];
        if (title) {
          attrs.push(["title", title]);
        }
        state.md.inline.tokenize(state);
        token = state.push("link_close", "a", -1);
      }
      state.pos = pos;
      state.posMax = max;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/image.js
var require_image = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/image.js"(exports, module) {
    "use strict";
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = function image(state, silent) {
      var attrs, code, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = "", oldPos = state.pos, max = state.posMax;
      if (state.src.charCodeAt(state.pos) !== 33) {
        return false;
      }
      if (state.src.charCodeAt(state.pos + 1) !== 91) {
        return false;
      }
      labelStart = state.pos + 2;
      labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
      if (labelEnd < 0) {
        return false;
      }
      pos = labelEnd + 1;
      if (pos < max && state.src.charCodeAt(pos) === 40) {
        pos++;
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 10) {
            break;
          }
        }
        if (pos >= max) {
          return false;
        }
        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
        if (res.ok) {
          href = state.md.normalizeLink(res.str);
          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = "";
          }
        }
        start = pos;
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 10) {
            break;
          }
        }
        res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
        if (pos < max && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
        } else {
          title = "";
        }
        if (pos >= max || state.src.charCodeAt(pos) !== 41) {
          state.pos = oldPos;
          return false;
        }
        pos++;
      } else {
        if (typeof state.env.references === "undefined") {
          return false;
        }
        if (pos < max && state.src.charCodeAt(pos) === 91) {
          start = pos + 1;
          pos = state.md.helpers.parseLinkLabel(state, pos);
          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
          pos = labelEnd + 1;
        }
        if (!label) {
          label = state.src.slice(labelStart, labelEnd);
        }
        ref = state.env.references[normalizeReference(label)];
        if (!ref) {
          state.pos = oldPos;
          return false;
        }
        href = ref.href;
        title = ref.title;
      }
      if (!silent) {
        content = state.src.slice(labelStart, labelEnd);
        state.md.inline.parse(content, state.md, state.env, tokens = []);
        token = state.push("image", "img", 0);
        token.attrs = attrs = [["src", href], ["alt", ""]];
        token.children = tokens;
        token.content = content;
        if (title) {
          attrs.push(["title", title]);
        }
      }
      state.pos = pos;
      state.posMax = max;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/autolink.js
var require_autolink = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/autolink.js"(exports, module) {
    "use strict";
    var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
    var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
    module.exports = function autolink(state, silent) {
      var url, fullUrl, token, ch, start, max, pos = state.pos;
      if (state.src.charCodeAt(pos) !== 60) {
        return false;
      }
      start = state.pos;
      max = state.posMax;
      for (; ; ) {
        if (++pos >= max)
          return false;
        ch = state.src.charCodeAt(pos);
        if (ch === 60)
          return false;
        if (ch === 62)
          break;
      }
      url = state.src.slice(start + 1, pos);
      if (AUTOLINK_RE.test(url)) {
        fullUrl = state.md.normalizeLink(url);
        if (!state.md.validateLink(fullUrl)) {
          return false;
        }
        if (!silent) {
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "autolink";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "autolink";
          token.info = "auto";
        }
        state.pos += url.length + 2;
        return true;
      }
      if (EMAIL_RE.test(url)) {
        fullUrl = state.md.normalizeLink("mailto:" + url);
        if (!state.md.validateLink(fullUrl)) {
          return false;
        }
        if (!silent) {
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "autolink";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "autolink";
          token.info = "auto";
        }
        state.pos += url.length + 2;
        return true;
      }
      return false;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/html_inline.js
var require_html_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/html_inline.js"(exports, module) {
    "use strict";
    var HTML_TAG_RE = require_html_re().HTML_TAG_RE;
    function isLetter(ch) {
      var lc = ch | 32;
      return lc >= 97 && lc <= 122;
    }
    module.exports = function html_inline(state, silent) {
      var ch, match, max, token, pos = state.pos;
      if (!state.md.options.html) {
        return false;
      }
      max = state.posMax;
      if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
        return false;
      }
      ch = state.src.charCodeAt(pos + 1);
      if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
        return false;
      }
      match = state.src.slice(pos).match(HTML_TAG_RE);
      if (!match) {
        return false;
      }
      if (!silent) {
        token = state.push("html_inline", "", 0);
        token.content = state.src.slice(pos, pos + match[0].length);
      }
      state.pos += match[0].length;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/entity.js
var require_entity = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/entity.js"(exports, module) {
    "use strict";
    var entities = require_entities2();
    var has = require_utils().has;
    var isValidEntityCode = require_utils().isValidEntityCode;
    var fromCodePoint = require_utils().fromCodePoint;
    var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
    var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
    module.exports = function entity(state, silent) {
      var ch, code, match, pos = state.pos, max = state.posMax;
      if (state.src.charCodeAt(pos) !== 38) {
        return false;
      }
      if (pos + 1 < max) {
        ch = state.src.charCodeAt(pos + 1);
        if (ch === 35) {
          match = state.src.slice(pos).match(DIGITAL_RE);
          if (match) {
            if (!silent) {
              code = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
              state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(65533);
            }
            state.pos += match[0].length;
            return true;
          }
        } else {
          match = state.src.slice(pos).match(NAMED_RE);
          if (match) {
            if (has(entities, match[1])) {
              if (!silent) {
                state.pending += entities[match[1]];
              }
              state.pos += match[0].length;
              return true;
            }
          }
        }
      }
      if (!silent) {
        state.pending += "&";
      }
      state.pos++;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/balance_pairs.js
var require_balance_pairs = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/balance_pairs.js"(exports, module) {
    "use strict";
    function processDelimiters(state, delimiters) {
      var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max = delimiters.length;
      if (!max)
        return;
      var headerIdx = 0;
      var lastTokenIdx = -2;
      var jumps = [];
      for (closerIdx = 0; closerIdx < max; closerIdx++) {
        closer = delimiters[closerIdx];
        jumps.push(0);
        if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
          headerIdx = closerIdx;
        }
        lastTokenIdx = closer.token;
        closer.length = closer.length || 0;
        if (!closer.close)
          continue;
        if (!openersBottom.hasOwnProperty(closer.marker)) {
          openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
        }
        minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
        openerIdx = headerIdx - jumps[headerIdx] - 1;
        newMinOpenerIdx = openerIdx;
        for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
          opener = delimiters[openerIdx];
          if (opener.marker !== closer.marker)
            continue;
          if (opener.open && opener.end < 0) {
            isOddMatch = false;
            if (opener.close || closer.open) {
              if ((opener.length + closer.length) % 3 === 0) {
                if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                  isOddMatch = true;
                }
              }
            }
            if (!isOddMatch) {
              lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
              jumps[closerIdx] = closerIdx - openerIdx + lastJump;
              jumps[openerIdx] = lastJump;
              closer.open = false;
              opener.end = closerIdx;
              opener.close = false;
              newMinOpenerIdx = -1;
              lastTokenIdx = -2;
              break;
            }
          }
        }
        if (newMinOpenerIdx !== -1) {
          openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
        }
      }
    }
    module.exports = function link_pairs(state) {
      var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
      processDelimiters(state, state.delimiters);
      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          processDelimiters(state, tokens_meta[curr].delimiters);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/text_collapse.js
var require_text_collapse = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/text_collapse.js"(exports, module) {
    "use strict";
    module.exports = function text_collapse(state) {
      var curr, last, level = 0, tokens = state.tokens, max = state.tokens.length;
      for (curr = last = 0; curr < max; curr++) {
        if (tokens[curr].nesting < 0)
          level--;
        tokens[curr].level = level;
        if (tokens[curr].nesting > 0)
          level++;
        if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
          tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
        } else {
          if (curr !== last) {
            tokens[last] = tokens[curr];
          }
          last++;
        }
      }
      if (curr !== last) {
        tokens.length = last;
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/state_inline.js
var require_state_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/state_inline.js"(exports, module) {
    "use strict";
    var Token = require_token();
    var isWhiteSpace = require_utils().isWhiteSpace;
    var isPunctChar = require_utils().isPunctChar;
    var isMdAsciiPunct = require_utils().isMdAsciiPunct;
    function StateInline(src, md, env, outTokens) {
      this.src = src;
      this.env = env;
      this.md = md;
      this.tokens = outTokens;
      this.tokens_meta = Array(outTokens.length);
      this.pos = 0;
      this.posMax = this.src.length;
      this.level = 0;
      this.pending = "";
      this.pendingLevel = 0;
      this.cache = {};
      this.delimiters = [];
      this._prev_delimiters = [];
      this.backticks = {};
      this.backticksScanned = false;
    }
    StateInline.prototype.pushPending = function() {
      var token = new Token("text", "", 0);
      token.content = this.pending;
      token.level = this.pendingLevel;
      this.tokens.push(token);
      this.pending = "";
      return token;
    };
    StateInline.prototype.push = function(type, tag, nesting) {
      if (this.pending) {
        this.pushPending();
      }
      var token = new Token(type, tag, nesting);
      var token_meta = null;
      if (nesting < 0) {
        this.level--;
        this.delimiters = this._prev_delimiters.pop();
      }
      token.level = this.level;
      if (nesting > 0) {
        this.level++;
        this._prev_delimiters.push(this.delimiters);
        this.delimiters = [];
        token_meta = { delimiters: this.delimiters };
      }
      this.pendingLevel = this.level;
      this.tokens.push(token);
      this.tokens_meta.push(token_meta);
      return token;
    };
    StateInline.prototype.scanDelims = function(start, canSplitWord) {
      var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max = this.posMax, marker = this.src.charCodeAt(start);
      lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
      while (pos < max && this.src.charCodeAt(pos) === marker) {
        pos++;
      }
      count = pos - start;
      nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);
      if (isNextWhiteSpace) {
        left_flanking = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          left_flanking = false;
        }
      }
      if (isLastWhiteSpace) {
        right_flanking = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          right_flanking = false;
        }
      }
      if (!canSplitWord) {
        can_open = left_flanking && (!right_flanking || isLastPunctChar);
        can_close = right_flanking && (!left_flanking || isNextPunctChar);
      } else {
        can_open = left_flanking;
        can_close = right_flanking;
      }
      return {
        can_open,
        can_close,
        length: count
      };
    };
    StateInline.prototype.Token = Token;
    module.exports = StateInline;
  }
});

// node_modules/markdown-it/lib/parser_inline.js
var require_parser_inline = __commonJS({
  "node_modules/markdown-it/lib/parser_inline.js"(exports, module) {
    "use strict";
    var Ruler = require_ruler();
    var _rules = [
      ["text", require_text()],
      ["newline", require_newline()],
      ["escape", require_escape()],
      ["backticks", require_backticks()],
      ["strikethrough", require_strikethrough().tokenize],
      ["emphasis", require_emphasis().tokenize],
      ["link", require_link()],
      ["image", require_image()],
      ["autolink", require_autolink()],
      ["html_inline", require_html_inline()],
      ["entity", require_entity()]
    ];
    var _rules2 = [
      ["balance_pairs", require_balance_pairs()],
      ["strikethrough", require_strikethrough().postProcess],
      ["emphasis", require_emphasis().postProcess],
      ["text_collapse", require_text_collapse()]
    ];
    function ParserInline() {
      var i;
      this.ruler = new Ruler();
      for (i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1]);
      }
      this.ruler2 = new Ruler();
      for (i = 0; i < _rules2.length; i++) {
        this.ruler2.push(_rules2[i][0], _rules2[i][1]);
      }
    }
    ParserInline.prototype.skipToken = function(state) {
      var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
      if (typeof cache[pos] !== "undefined") {
        state.pos = cache[pos];
        return;
      }
      if (state.level < maxNesting) {
        for (i = 0; i < len; i++) {
          state.level++;
          ok = rules[i](state, true);
          state.level--;
          if (ok) {
            break;
          }
        }
      } else {
        state.pos = state.posMax;
      }
      if (!ok) {
        state.pos++;
      }
      cache[pos] = state.pos;
    };
    ParserInline.prototype.tokenize = function(state) {
      var ok, i, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
      while (state.pos < end) {
        if (state.level < maxNesting) {
          for (i = 0; i < len; i++) {
            ok = rules[i](state, false);
            if (ok) {
              break;
            }
          }
        }
        if (ok) {
          if (state.pos >= end) {
            break;
          }
          continue;
        }
        state.pending += state.src[state.pos++];
      }
      if (state.pending) {
        state.pushPending();
      }
    };
    ParserInline.prototype.parse = function(str, md, env, outTokens) {
      var i, rules, len;
      var state = new this.State(str, md, env, outTokens);
      this.tokenize(state);
      rules = this.ruler2.getRules("");
      len = rules.length;
      for (i = 0; i < len; i++) {
        rules[i](state);
      }
    };
    ParserInline.prototype.State = require_state_inline();
    module.exports = ParserInline;
  }
});

// node_modules/linkify-it/lib/re.js
var require_re = __commonJS({
  "node_modules/linkify-it/lib/re.js"(exports, module) {
    "use strict";
    module.exports = function(opts) {
      var re = {};
      re.src_Any = require_regex2().source;
      re.src_Cc = require_regex3().source;
      re.src_Z = require_regex5().source;
      re.src_P = require_regex().source;
      re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join("|");
      re.src_ZCc = [re.src_Z, re.src_Cc].join("|");
      var text_separators = "[><\uFF5C]";
      re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
      re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
      re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
      re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
      re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
      re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re.src_ZCc + "|[.]).|" + (opts && opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re.src_ZCc + ").|;(?!" + re.src_ZCc + ").|\\!+(?!" + re.src_ZCc + "|[!]).|\\?(?!" + re.src_ZCc + "|[?]).)+|\\/)?";
      re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
      re.src_xn = "xn--[a-z0-9\\-]{1,59}";
      re.src_domain_root = "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
      re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
      re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
      re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
      re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
      re.src_host_strict = re.src_host + re.src_host_terminator;
      re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
      re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
      re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
      re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
      re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
      re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
      re.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
      re.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
      return re;
    };
  }
});

// node_modules/linkify-it/index.js
var require_linkify_it = __commonJS({
  "node_modules/linkify-it/index.js"(exports, module) {
    "use strict";
    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function(source) {
        if (!source) {
          return;
        }
        Object.keys(source).forEach(function(key) {
          obj[key] = source[key];
        });
      });
      return obj;
    }
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    function isObject(obj) {
      return _class(obj) === "[object Object]";
    }
    function isRegExp(obj) {
      return _class(obj) === "[object RegExp]";
    }
    function isFunction(obj) {
      return _class(obj) === "[object Function]";
    }
    function escapeRE(str) {
      return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    }
    var defaultOptions = {
      fuzzyLink: true,
      fuzzyEmail: true,
      fuzzyIP: false
    };
    function isOptionsObj(obj) {
      return Object.keys(obj || {}).reduce(function(acc, k) {
        return acc || defaultOptions.hasOwnProperty(k);
      }, false);
    }
    var defaultSchemas = {
      "http:": {
        validate: function(text, pos, self2) {
          var tail = text.slice(pos);
          if (!self2.re.http) {
            self2.re.http = new RegExp("^\\/\\/" + self2.re.src_auth + self2.re.src_host_port_strict + self2.re.src_path, "i");
          }
          if (self2.re.http.test(tail)) {
            return tail.match(self2.re.http)[0].length;
          }
          return 0;
        }
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function(text, pos, self2) {
          var tail = text.slice(pos);
          if (!self2.re.no_http) {
            self2.re.no_http = new RegExp("^" + self2.re.src_auth + "(?:localhost|(?:(?:" + self2.re.src_domain + ")\\.)+" + self2.re.src_domain_root + ")" + self2.re.src_port + self2.re.src_host_terminator + self2.re.src_path, "i");
          }
          if (self2.re.no_http.test(tail)) {
            if (pos >= 3 && text[pos - 3] === ":") {
              return 0;
            }
            if (pos >= 3 && text[pos - 3] === "/") {
              return 0;
            }
            return tail.match(self2.re.no_http)[0].length;
          }
          return 0;
        }
      },
      "mailto:": {
        validate: function(text, pos, self2) {
          var tail = text.slice(pos);
          if (!self2.re.mailto) {
            self2.re.mailto = new RegExp("^" + self2.re.src_email_name + "@" + self2.re.src_host_strict, "i");
          }
          if (self2.re.mailto.test(tail)) {
            return tail.match(self2.re.mailto)[0].length;
          }
          return 0;
        }
      }
    };
    var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
    var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
    function resetScanCache(self2) {
      self2.__index__ = -1;
      self2.__text_cache__ = "";
    }
    function createValidator(re) {
      return function(text, pos) {
        var tail = text.slice(pos);
        if (re.test(tail)) {
          return tail.match(re)[0].length;
        }
        return 0;
      };
    }
    function createNormalizer() {
      return function(match, self2) {
        self2.normalize(match);
      };
    }
    function compile(self2) {
      var re = self2.re = require_re()(self2.__opts__);
      var tlds = self2.__tlds__.slice();
      self2.onCompile();
      if (!self2.__tlds_replaced__) {
        tlds.push(tlds_2ch_src_re);
      }
      tlds.push(re.src_xn);
      re.src_tlds = tlds.join("|");
      function untpl(tpl) {
        return tpl.replace("%TLDS%", re.src_tlds);
      }
      re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
      re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
      re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
      re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
      var aliases = [];
      self2.__compiled__ = {};
      function schemaError(name, val) {
        throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
      }
      Object.keys(self2.__schemas__).forEach(function(name) {
        var val = self2.__schemas__[name];
        if (val === null) {
          return;
        }
        var compiled = { validate: null, link: null };
        self2.__compiled__[name] = compiled;
        if (isObject(val)) {
          if (isRegExp(val.validate)) {
            compiled.validate = createValidator(val.validate);
          } else if (isFunction(val.validate)) {
            compiled.validate = val.validate;
          } else {
            schemaError(name, val);
          }
          if (isFunction(val.normalize)) {
            compiled.normalize = val.normalize;
          } else if (!val.normalize) {
            compiled.normalize = createNormalizer();
          } else {
            schemaError(name, val);
          }
          return;
        }
        if (isString(val)) {
          aliases.push(name);
          return;
        }
        schemaError(name, val);
      });
      aliases.forEach(function(alias) {
        if (!self2.__compiled__[self2.__schemas__[alias]]) {
          return;
        }
        self2.__compiled__[alias].validate = self2.__compiled__[self2.__schemas__[alias]].validate;
        self2.__compiled__[alias].normalize = self2.__compiled__[self2.__schemas__[alias]].normalize;
      });
      self2.__compiled__[""] = { validate: null, normalize: createNormalizer() };
      var slist = Object.keys(self2.__compiled__).filter(function(name) {
        return name.length > 0 && self2.__compiled__[name];
      }).map(escapeRE).join("|");
      self2.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "i");
      self2.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
      self2.re.pretest = RegExp("(" + self2.re.schema_test.source + ")|(" + self2.re.host_fuzzy_test.source + ")|@", "i");
      resetScanCache(self2);
    }
    function Match(self2, shift) {
      var start = self2.__index__, end = self2.__last_index__, text = self2.__text_cache__.slice(start, end);
      this.schema = self2.__schema__.toLowerCase();
      this.index = start + shift;
      this.lastIndex = end + shift;
      this.raw = text;
      this.text = text;
      this.url = text;
    }
    function createMatch(self2, shift) {
      var match = new Match(self2, shift);
      self2.__compiled__[match.schema].normalize(match, self2);
      return match;
    }
    function LinkifyIt(schemas, options2) {
      if (!(this instanceof LinkifyIt)) {
        return new LinkifyIt(schemas, options2);
      }
      if (!options2) {
        if (isOptionsObj(schemas)) {
          options2 = schemas;
          schemas = {};
        }
      }
      this.__opts__ = assign({}, defaultOptions, options2);
      this.__index__ = -1;
      this.__last_index__ = -1;
      this.__schema__ = "";
      this.__text_cache__ = "";
      this.__schemas__ = assign({}, defaultSchemas, schemas);
      this.__compiled__ = {};
      this.__tlds__ = tlds_default;
      this.__tlds_replaced__ = false;
      this.re = {};
      compile(this);
    }
    LinkifyIt.prototype.add = function add(schema, definition) {
      this.__schemas__[schema] = definition;
      compile(this);
      return this;
    };
    LinkifyIt.prototype.set = function set(options2) {
      this.__opts__ = assign(this.__opts__, options2);
      return this;
    };
    LinkifyIt.prototype.test = function test(text) {
      this.__text_cache__ = text;
      this.__index__ = -1;
      if (!text.length) {
        return false;
      }
      var m, ml, me, len, shift, next, re, tld_pos, at_pos;
      if (this.re.schema_test.test(text)) {
        re = this.re.schema_search;
        re.lastIndex = 0;
        while ((m = re.exec(text)) !== null) {
          len = this.testSchemaAt(text, m[2], re.lastIndex);
          if (len) {
            this.__schema__ = m[2];
            this.__index__ = m.index + m[1].length;
            this.__last_index__ = m.index + m[0].length + len;
            break;
          }
        }
      }
      if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
        tld_pos = text.search(this.re.host_fuzzy_test);
        if (tld_pos >= 0) {
          if (this.__index__ < 0 || tld_pos < this.__index__) {
            if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
              shift = ml.index + ml[1].length;
              if (this.__index__ < 0 || shift < this.__index__) {
                this.__schema__ = "";
                this.__index__ = shift;
                this.__last_index__ = ml.index + ml[0].length;
              }
            }
          }
        }
      }
      if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
        at_pos = text.indexOf("@");
        if (at_pos >= 0) {
          if ((me = text.match(this.re.email_fuzzy)) !== null) {
            shift = me.index + me[1].length;
            next = me.index + me[0].length;
            if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
              this.__schema__ = "mailto:";
              this.__index__ = shift;
              this.__last_index__ = next;
            }
          }
        }
      }
      return this.__index__ >= 0;
    };
    LinkifyIt.prototype.pretest = function pretest(text) {
      return this.re.pretest.test(text);
    };
    LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
      if (!this.__compiled__[schema.toLowerCase()]) {
        return 0;
      }
      return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
    };
    LinkifyIt.prototype.match = function match(text) {
      var shift = 0, result = [];
      if (this.__index__ >= 0 && this.__text_cache__ === text) {
        result.push(createMatch(this, shift));
        shift = this.__last_index__;
      }
      var tail = shift ? text.slice(shift) : text;
      while (this.test(tail)) {
        result.push(createMatch(this, shift));
        tail = tail.slice(this.__last_index__);
        shift += this.__last_index__;
      }
      if (result.length) {
        return result;
      }
      return null;
    };
    LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
      list = Array.isArray(list) ? list : [list];
      if (!keepOld) {
        this.__tlds__ = list.slice();
        this.__tlds_replaced__ = true;
        compile(this);
        return this;
      }
      this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
        return el !== arr[idx - 1];
      }).reverse();
      compile(this);
      return this;
    };
    LinkifyIt.prototype.normalize = function normalize(match) {
      if (!match.schema) {
        match.url = "http://" + match.url;
      }
      if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
        match.url = "mailto:" + match.url;
      }
    };
    LinkifyIt.prototype.onCompile = function onCompile() {
    };
    module.exports = LinkifyIt;
  }
});

// node_modules/punycode/punycode.es6.js
var punycode_es6_exports = {};
__export(punycode_es6_exports, {
  decode: () => decode,
  default: () => punycode_es6_default,
  encode: () => encode,
  toASCII: () => toASCII,
  toUnicode: () => toUnicode,
  ucs2decode: () => ucs2decode,
  ucs2encode: () => ucs2encode
});
function error(type) {
  throw new RangeError(errors[type]);
}
function map(array, fn) {
  const result = [];
  let length = array.length;
  while (length--) {
    result[length] = fn(array[length]);
  }
  return result;
}
function mapDomain(string, fn) {
  const parts = string.split("@");
  let result = "";
  if (parts.length > 1) {
    result = parts[0] + "@";
    string = parts[1];
  }
  string = string.replace(regexSeparators, ".");
  const labels = string.split(".");
  const encoded = map(labels, fn).join(".");
  return result + encoded;
}
function ucs2decode(string) {
  const output = [];
  let counter = 0;
  const length = string.length;
  while (counter < length) {
    const value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      const extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
var maxInt, base, tMin, tMax, skew, damp, initialBias, initialN, delimiter, regexPunycode, regexNonASCII, regexSeparators, errors, baseMinusTMin, floor, stringFromCharCode, ucs2encode, basicToDigit, digitToBasic, adapt, decode, encode, toUnicode, toASCII, punycode, punycode_es6_default;
var init_punycode_es6 = __esm({
  "node_modules/punycode/punycode.es6.js"() {
    "use strict";
    maxInt = 2147483647;
    base = 36;
    tMin = 1;
    tMax = 26;
    skew = 38;
    damp = 700;
    initialBias = 72;
    initialN = 128;
    delimiter = "-";
    regexPunycode = /^xn--/;
    regexNonASCII = /[^\0-\x7E]/;
    regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
    errors = {
      "overflow": "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    baseMinusTMin = base - tMin;
    floor = Math.floor;
    stringFromCharCode = String.fromCharCode;
    ucs2encode = (array) => String.fromCodePoint(...array);
    basicToDigit = function(codePoint) {
      if (codePoint - 48 < 10) {
        return codePoint - 22;
      }
      if (codePoint - 65 < 26) {
        return codePoint - 65;
      }
      if (codePoint - 97 < 26) {
        return codePoint - 97;
      }
      return base;
    };
    digitToBasic = function(digit, flag) {
      return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    };
    adapt = function(delta, numPoints, firstTime) {
      let k = 0;
      delta = firstTime ? floor(delta / damp) : delta >> 1;
      delta += floor(delta / numPoints);
      for (; delta > baseMinusTMin * tMax >> 1; k += base) {
        delta = floor(delta / baseMinusTMin);
      }
      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    };
    decode = function(input) {
      const output = [];
      const inputLength = input.length;
      let i = 0;
      let n = initialN;
      let bias = initialBias;
      let basic = input.lastIndexOf(delimiter);
      if (basic < 0) {
        basic = 0;
      }
      for (let j = 0; j < basic; ++j) {
        if (input.charCodeAt(j) >= 128) {
          error("not-basic");
        }
        output.push(input.charCodeAt(j));
      }
      for (let index2 = basic > 0 ? basic + 1 : 0; index2 < inputLength; ) {
        let oldi = i;
        for (let w = 1, k = base; ; k += base) {
          if (index2 >= inputLength) {
            error("invalid-input");
          }
          const digit = basicToDigit(input.charCodeAt(index2++));
          if (digit >= base || digit > floor((maxInt - i) / w)) {
            error("overflow");
          }
          i += digit * w;
          const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (digit < t) {
            break;
          }
          const baseMinusT = base - t;
          if (w > floor(maxInt / baseMinusT)) {
            error("overflow");
          }
          w *= baseMinusT;
        }
        const out = output.length + 1;
        bias = adapt(i - oldi, out, oldi == 0);
        if (floor(i / out) > maxInt - n) {
          error("overflow");
        }
        n += floor(i / out);
        i %= out;
        output.splice(i++, 0, n);
      }
      return String.fromCodePoint(...output);
    };
    encode = function(input) {
      const output = [];
      input = ucs2decode(input);
      let inputLength = input.length;
      let n = initialN;
      let delta = 0;
      let bias = initialBias;
      for (const currentValue of input) {
        if (currentValue < 128) {
          output.push(stringFromCharCode(currentValue));
        }
      }
      let basicLength = output.length;
      let handledCPCount = basicLength;
      if (basicLength) {
        output.push(delimiter);
      }
      while (handledCPCount < inputLength) {
        let m = maxInt;
        for (const currentValue of input) {
          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        }
        const handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          error("overflow");
        }
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for (const currentValue of input) {
          if (currentValue < n && ++delta > maxInt) {
            error("overflow");
          }
          if (currentValue == n) {
            let q = delta;
            for (let k = base; ; k += base) {
              const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (q < t) {
                break;
              }
              const qMinusT = q - t;
              const baseMinusT = base - t;
              output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
              q = floor(qMinusT / baseMinusT);
            }
            output.push(stringFromCharCode(digitToBasic(q, 0)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
            delta = 0;
            ++handledCPCount;
          }
        }
        ++delta;
        ++n;
      }
      return output.join("");
    };
    toUnicode = function(input) {
      return mapDomain(input, function(string) {
        return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
      });
    };
    toASCII = function(input) {
      return mapDomain(input, function(string) {
        return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
      });
    };
    punycode = {
      "version": "2.1.0",
      "ucs2": {
        "decode": ucs2decode,
        "encode": ucs2encode
      },
      "decode": decode,
      "encode": encode,
      "toASCII": toASCII,
      "toUnicode": toUnicode
    };
    punycode_es6_default = punycode;
  }
});

// node_modules/markdown-it/lib/presets/default.js
var require_default = __commonJS({
  "node_modules/markdown-it/lib/presets/default.js"(exports, module) {
    "use strict";
    module.exports = {
      options: {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 100
      },
      components: {
        core: {},
        block: {},
        inline: {}
      }
    };
  }
});

// node_modules/markdown-it/lib/presets/zero.js
var require_zero = __commonJS({
  "node_modules/markdown-it/lib/presets/zero.js"(exports, module) {
    "use strict";
    module.exports = {
      options: {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {
          rules: [
            "normalize",
            "block",
            "inline"
          ]
        },
        block: {
          rules: [
            "paragraph"
          ]
        },
        inline: {
          rules: [
            "text"
          ],
          rules2: [
            "balance_pairs",
            "text_collapse"
          ]
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/presets/commonmark.js
var require_commonmark = __commonJS({
  "node_modules/markdown-it/lib/presets/commonmark.js"(exports, module) {
    "use strict";
    module.exports = {
      options: {
        html: true,
        xhtmlOut: true,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {
          rules: [
            "normalize",
            "block",
            "inline"
          ]
        },
        block: {
          rules: [
            "blockquote",
            "code",
            "fence",
            "heading",
            "hr",
            "html_block",
            "lheading",
            "list",
            "reference",
            "paragraph"
          ]
        },
        inline: {
          rules: [
            "autolink",
            "backticks",
            "emphasis",
            "entity",
            "escape",
            "html_inline",
            "image",
            "link",
            "newline",
            "text"
          ],
          rules2: [
            "balance_pairs",
            "emphasis",
            "text_collapse"
          ]
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/index.js
var require_lib = __commonJS({
  "node_modules/markdown-it/lib/index.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var helpers = require_helpers();
    var Renderer = require_renderer();
    var ParserCore = require_parser_core();
    var ParserBlock = require_parser_block();
    var ParserInline = require_parser_inline();
    var LinkifyIt = require_linkify_it();
    var mdurl = require_mdurl();
    var punycode2 = (init_punycode_es6(), __toCommonJS(punycode_es6_exports));
    var config = {
      default: require_default(),
      zero: require_zero(),
      commonmark: require_commonmark()
    };
    var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
    var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
    function validateLink(url) {
      var str = url.trim().toLowerCase();
      return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
    }
    var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
    function normalizeLink(url) {
      var parsed = mdurl.parse(url, true);
      if (parsed.hostname) {
        if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
          try {
            parsed.hostname = punycode2.toASCII(parsed.hostname);
          } catch (er) {
          }
        }
      }
      return mdurl.encode(mdurl.format(parsed));
    }
    function normalizeLinkText(url) {
      var parsed = mdurl.parse(url, true);
      if (parsed.hostname) {
        if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
          try {
            parsed.hostname = punycode2.toUnicode(parsed.hostname);
          } catch (er) {
          }
        }
      }
      return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
    }
    function MarkdownIt2(presetName, options2) {
      if (!(this instanceof MarkdownIt2)) {
        return new MarkdownIt2(presetName, options2);
      }
      if (!options2) {
        if (!utils.isString(presetName)) {
          options2 = presetName || {};
          presetName = "default";
        }
      }
      this.inline = new ParserInline();
      this.block = new ParserBlock();
      this.core = new ParserCore();
      this.renderer = new Renderer();
      this.linkify = new LinkifyIt();
      this.validateLink = validateLink;
      this.normalizeLink = normalizeLink;
      this.normalizeLinkText = normalizeLinkText;
      this.utils = utils;
      this.helpers = utils.assign({}, helpers);
      this.options = {};
      this.configure(presetName);
      if (options2) {
        this.set(options2);
      }
    }
    MarkdownIt2.prototype.set = function(options2) {
      utils.assign(this.options, options2);
      return this;
    };
    MarkdownIt2.prototype.configure = function(presets) {
      var self2 = this, presetName;
      if (utils.isString(presets)) {
        presetName = presets;
        presets = config[presetName];
        if (!presets) {
          throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
        }
      }
      if (!presets) {
        throw new Error("Wrong `markdown-it` preset, can't be empty");
      }
      if (presets.options) {
        self2.set(presets.options);
      }
      if (presets.components) {
        Object.keys(presets.components).forEach(function(name) {
          if (presets.components[name].rules) {
            self2[name].ruler.enableOnly(presets.components[name].rules);
          }
          if (presets.components[name].rules2) {
            self2[name].ruler2.enableOnly(presets.components[name].rules2);
          }
        });
      }
      return this;
    };
    MarkdownIt2.prototype.enable = function(list, ignoreInvalid) {
      var result = [];
      if (!Array.isArray(list)) {
        list = [list];
      }
      ["core", "block", "inline"].forEach(function(chain) {
        result = result.concat(this[chain].ruler.enable(list, true));
      }, this);
      result = result.concat(this.inline.ruler2.enable(list, true));
      var missed = list.filter(function(name) {
        return result.indexOf(name) < 0;
      });
      if (missed.length && !ignoreInvalid) {
        throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
      }
      return this;
    };
    MarkdownIt2.prototype.disable = function(list, ignoreInvalid) {
      var result = [];
      if (!Array.isArray(list)) {
        list = [list];
      }
      ["core", "block", "inline"].forEach(function(chain) {
        result = result.concat(this[chain].ruler.disable(list, true));
      }, this);
      result = result.concat(this.inline.ruler2.disable(list, true));
      var missed = list.filter(function(name) {
        return result.indexOf(name) < 0;
      });
      if (missed.length && !ignoreInvalid) {
        throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
      }
      return this;
    };
    MarkdownIt2.prototype.use = function(plugin) {
      var args = [this].concat(Array.prototype.slice.call(arguments, 1));
      plugin.apply(plugin, args);
      return this;
    };
    MarkdownIt2.prototype.parse = function(src, env) {
      if (typeof src !== "string") {
        throw new Error("Input data should be a String");
      }
      var state = new this.core.State(src, this, env);
      this.core.process(state);
      return state.tokens;
    };
    MarkdownIt2.prototype.render = function(src, env) {
      env = env || {};
      return this.renderer.render(this.parse(src, env), this.options, env);
    };
    MarkdownIt2.prototype.parseInline = function(src, env) {
      var state = new this.core.State(src, this, env);
      state.inlineMode = true;
      this.core.process(state);
      return state.tokens;
    };
    MarkdownIt2.prototype.renderInline = function(src, env) {
      env = env || {};
      return this.renderer.render(this.parseInline(src, env), this.options, env);
    };
    module.exports = MarkdownIt2;
  }
});

// node_modules/markdown-it/index.js
var require_markdown_it = __commonJS({
  "node_modules/markdown-it/index.js"(exports, module) {
    "use strict";
    module.exports = require_lib();
  }
});

// node_modules/markdown-it-task-lists/index.js
var require_markdown_it_task_lists = __commonJS({
  "node_modules/markdown-it-task-lists/index.js"(exports, module) {
    var disableCheckboxes = true;
    var useLabelWrapper = false;
    var useLabelAfter = false;
    module.exports = function(md, options2) {
      if (options2) {
        disableCheckboxes = !options2.enabled;
        useLabelWrapper = !!options2.label;
        useLabelAfter = !!options2.labelAfter;
      }
      md.core.ruler.after("inline", "github-task-lists", function(state) {
        var tokens = state.tokens;
        for (var i = 2; i < tokens.length; i++) {
          if (isTodoItem(tokens, i)) {
            todoify(tokens[i], state.Token);
            attrSet(tokens[i - 2], "class", "task-list-item" + (!disableCheckboxes ? " enabled" : ""));
            attrSet(tokens[parentToken(tokens, i - 2)], "class", "contains-task-list");
          }
        }
      });
    };
    function attrSet(token, name, value) {
      var index2 = token.attrIndex(name);
      var attr = [name, value];
      if (index2 < 0) {
        token.attrPush(attr);
      } else {
        token.attrs[index2] = attr;
      }
    }
    function parentToken(tokens, index2) {
      var targetLevel = tokens[index2].level - 1;
      for (var i = index2 - 1; i >= 0; i--) {
        if (tokens[i].level === targetLevel) {
          return i;
        }
      }
      return -1;
    }
    function isTodoItem(tokens, index2) {
      return isInline(tokens[index2]) && isParagraph(tokens[index2 - 1]) && isListItem(tokens[index2 - 2]) && startsWithTodoMarkdown(tokens[index2]);
    }
    function todoify(token, TokenConstructor) {
      token.children.unshift(makeCheckbox(token, TokenConstructor));
      token.children[1].content = token.children[1].content.slice(3);
      token.content = token.content.slice(3);
      if (useLabelWrapper) {
        if (useLabelAfter) {
          token.children.pop();
          var id = "task-item-" + Math.ceil(Math.random() * (1e4 * 1e3) - 1e3);
          token.children[0].content = token.children[0].content.slice(0, -1) + ' id="' + id + '">';
          token.children.push(afterLabel(token.content, id, TokenConstructor));
        } else {
          token.children.unshift(beginLabel(TokenConstructor));
          token.children.push(endLabel(TokenConstructor));
        }
      }
    }
    function makeCheckbox(token, TokenConstructor) {
      var checkbox = new TokenConstructor("html_inline", "", 0);
      var disabledAttr = disableCheckboxes ? ' disabled="" ' : "";
      if (token.content.indexOf("[ ] ") === 0) {
        checkbox.content = '<input class="task-list-item-checkbox"' + disabledAttr + 'type="checkbox">';
      } else if (token.content.indexOf("[x] ") === 0 || token.content.indexOf("[X] ") === 0) {
        checkbox.content = '<input class="task-list-item-checkbox" checked=""' + disabledAttr + 'type="checkbox">';
      }
      return checkbox;
    }
    function beginLabel(TokenConstructor) {
      var token = new TokenConstructor("html_inline", "", 0);
      token.content = "<label>";
      return token;
    }
    function endLabel(TokenConstructor) {
      var token = new TokenConstructor("html_inline", "", 0);
      token.content = "</label>";
      return token;
    }
    function afterLabel(content, id, TokenConstructor) {
      var token = new TokenConstructor("html_inline", "", 0);
      token.content = '<label class="task-list-item-label" for="' + id + '">' + content + "</label>";
      token.attrs = [{ for: id }];
      return token;
    }
    function isInline(token) {
      return token.type === "inline";
    }
    function isParagraph(token) {
      return token.type === "paragraph_open";
    }
    function isListItem(token) {
      return token.type === "list_item_open";
    }
    function startsWithTodoMarkdown(token) {
      return token.content.indexOf("[ ] ") === 0 || token.content.indexOf("[x] ") === 0 || token.content.indexOf("[X] ") === 0;
    }
  }
});

// node_modules/clipboard/dist/clipboard.min.js
var require_clipboard_min = __commonJS({
  "node_modules/clipboard/dist/clipboard.min.js"(exports, module) {
    !function(t, e) {
      typeof exports == "object" && typeof module == "object" ? module.exports = e() : typeof define == "function" && define.amd ? define([], e) : typeof exports == "object" ? exports.ClipboardJS = e() : t.ClipboardJS = e();
    }(exports, function() {
      return n = { 686: function(t, e, n2) {
        "use strict";
        n2.d(e, { default: function() {
          return o2;
        } });
        var e = n2(279), i = n2.n(e), e = n2(370), u = n2.n(e), e = n2(817), c = n2.n(e);
        function a(t2) {
          try {
            return document.execCommand(t2);
          } catch (t3) {
            return;
          }
        }
        var f = function(t2) {
          t2 = c()(t2);
          return a("cut"), t2;
        };
        var l = function(t2) {
          var e2, n3, o3, r3 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : { container: document.body }, i2 = "";
          return typeof t2 == "string" ? (e2 = t2, n3 = document.documentElement.getAttribute("dir") === "rtl", (o3 = document.createElement("textarea")).style.fontSize = "12pt", o3.style.border = "0", o3.style.padding = "0", o3.style.margin = "0", o3.style.position = "absolute", o3.style[n3 ? "right" : "left"] = "-9999px", n3 = window.pageYOffset || document.documentElement.scrollTop, o3.style.top = "".concat(n3, "px"), o3.setAttribute("readonly", ""), o3.value = e2, o3 = o3, r3.container.appendChild(o3), i2 = c()(o3), a("copy"), o3.remove()) : (i2 = c()(t2), a("copy")), i2;
        };
        function r2(t2) {
          return (r2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var s = function() {
          var t2 = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, e2 = t2.action, n3 = e2 === void 0 ? "copy" : e2, o3 = t2.container, e2 = t2.target, t2 = t2.text;
          if (n3 !== "copy" && n3 !== "cut")
            throw new Error('Invalid "action" value, use either "copy" or "cut"');
          if (e2 !== void 0) {
            if (!e2 || r2(e2) !== "object" || e2.nodeType !== 1)
              throw new Error('Invalid "target" value, use a valid Element');
            if (n3 === "copy" && e2.hasAttribute("disabled"))
              throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            if (n3 === "cut" && (e2.hasAttribute("readonly") || e2.hasAttribute("disabled")))
              throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
          }
          return t2 ? l(t2, { container: o3 }) : e2 ? n3 === "cut" ? f(e2) : l(e2, { container: o3 }) : void 0;
        };
        function p(t2) {
          return (p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        function d(t2, e2) {
          for (var n3 = 0; n3 < e2.length; n3++) {
            var o3 = e2[n3];
            o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(t2, o3.key, o3);
          }
        }
        function y(t2, e2) {
          return (y = Object.setPrototypeOf || function(t3, e3) {
            return t3.__proto__ = e3, t3;
          })(t2, e2);
        }
        function h(n3) {
          var o3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), true;
            } catch (t2) {
              return false;
            }
          }();
          return function() {
            var t2, e2 = m(n3);
            return t2 = o3 ? (t2 = m(this).constructor, Reflect.construct(e2, arguments, t2)) : e2.apply(this, arguments), e2 = this, !(t2 = t2) || p(t2) !== "object" && typeof t2 != "function" ? function(t3) {
              if (t3 !== void 0)
                return t3;
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }(e2) : t2;
          };
        }
        function m(t2) {
          return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          })(t2);
        }
        function v(t2, e2) {
          t2 = "data-clipboard-".concat(t2);
          if (e2.hasAttribute(t2))
            return e2.getAttribute(t2);
        }
        var o2 = function() {
          !function(t3, e3) {
            if (typeof e3 != "function" && e3 !== null)
              throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && y(t3, e3);
          }(r3, i());
          var t2, e2, n3, o3 = h(r3);
          function r3(t3, e3) {
            var n4;
            return function(t4) {
              if (!(t4 instanceof r3))
                throw new TypeError("Cannot call a class as a function");
            }(this), (n4 = o3.call(this)).resolveOptions(e3), n4.listenClick(t3), n4;
          }
          return t2 = r3, n3 = [{ key: "copy", value: function(t3) {
            var e3 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : { container: document.body };
            return l(t3, e3);
          } }, { key: "cut", value: function(t3) {
            return f(t3);
          } }, { key: "isSupported", value: function() {
            var t3 = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], t3 = typeof t3 == "string" ? [t3] : t3, e3 = !!document.queryCommandSupported;
            return t3.forEach(function(t4) {
              e3 = e3 && !!document.queryCommandSupported(t4);
            }), e3;
          } }], (e2 = [{ key: "resolveOptions", value: function() {
            var t3 = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
            this.action = typeof t3.action == "function" ? t3.action : this.defaultAction, this.target = typeof t3.target == "function" ? t3.target : this.defaultTarget, this.text = typeof t3.text == "function" ? t3.text : this.defaultText, this.container = p(t3.container) === "object" ? t3.container : document.body;
          } }, { key: "listenClick", value: function(t3) {
            var e3 = this;
            this.listener = u()(t3, "click", function(t4) {
              return e3.onClick(t4);
            });
          } }, { key: "onClick", value: function(t3) {
            var e3 = t3.delegateTarget || t3.currentTarget, n4 = this.action(e3) || "copy", t3 = s({ action: n4, container: this.container, target: this.target(e3), text: this.text(e3) });
            this.emit(t3 ? "success" : "error", { action: n4, text: t3, trigger: e3, clearSelection: function() {
              e3 && e3.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
            } });
          } }, { key: "defaultAction", value: function(t3) {
            return v("action", t3);
          } }, { key: "defaultTarget", value: function(t3) {
            t3 = v("target", t3);
            if (t3)
              return document.querySelector(t3);
          } }, { key: "defaultText", value: function(t3) {
            return v("text", t3);
          } }, { key: "destroy", value: function() {
            this.listener.destroy();
          } }]) && d(t2.prototype, e2), n3 && d(t2, n3), r3;
        }();
      }, 828: function(t) {
        var e;
        typeof Element == "undefined" || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function(t2, e2) {
          for (; t2 && t2.nodeType !== 9; ) {
            if (typeof t2.matches == "function" && t2.matches(e2))
              return t2;
            t2 = t2.parentNode;
          }
        };
      }, 438: function(t, e, n2) {
        var u = n2(828);
        function i(t2, e2, n3, o2, r2) {
          var i2 = function(e3, n4, t3, o3) {
            return function(t4) {
              t4.delegateTarget = u(t4.target, n4), t4.delegateTarget && o3.call(e3, t4);
            };
          }.apply(this, arguments);
          return t2.addEventListener(n3, i2, r2), { destroy: function() {
            t2.removeEventListener(n3, i2, r2);
          } };
        }
        t.exports = function(t2, e2, n3, o2, r2) {
          return typeof t2.addEventListener == "function" ? i.apply(null, arguments) : typeof n3 == "function" ? i.bind(null, document).apply(null, arguments) : (typeof t2 == "string" && (t2 = document.querySelectorAll(t2)), Array.prototype.map.call(t2, function(t3) {
            return i(t3, e2, n3, o2, r2);
          }));
        };
      }, 879: function(t, n2) {
        n2.node = function(t2) {
          return t2 !== void 0 && t2 instanceof HTMLElement && t2.nodeType === 1;
        }, n2.nodeList = function(t2) {
          var e = Object.prototype.toString.call(t2);
          return t2 !== void 0 && (e === "[object NodeList]" || e === "[object HTMLCollection]") && "length" in t2 && (t2.length === 0 || n2.node(t2[0]));
        }, n2.string = function(t2) {
          return typeof t2 == "string" || t2 instanceof String;
        }, n2.fn = function(t2) {
          return Object.prototype.toString.call(t2) === "[object Function]";
        };
      }, 370: function(t, e, n2) {
        var f = n2(879), l = n2(438);
        t.exports = function(t2, e2, n3) {
          if (!t2 && !e2 && !n3)
            throw new Error("Missing required arguments");
          if (!f.string(e2))
            throw new TypeError("Second argument must be a String");
          if (!f.fn(n3))
            throw new TypeError("Third argument must be a Function");
          if (f.node(t2))
            return c = e2, a = n3, (u = t2).addEventListener(c, a), { destroy: function() {
              u.removeEventListener(c, a);
            } };
          if (f.nodeList(t2))
            return o2 = t2, r2 = e2, i = n3, Array.prototype.forEach.call(o2, function(t3) {
              t3.addEventListener(r2, i);
            }), { destroy: function() {
              Array.prototype.forEach.call(o2, function(t3) {
                t3.removeEventListener(r2, i);
              });
            } };
          if (f.string(t2))
            return t2 = t2, e2 = e2, n3 = n3, l(document.body, t2, e2, n3);
          throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
          var o2, r2, i, u, c, a;
        };
      }, 817: function(t) {
        t.exports = function(t2) {
          var e, n2 = t2.nodeName === "SELECT" ? (t2.focus(), t2.value) : t2.nodeName === "INPUT" || t2.nodeName === "TEXTAREA" ? ((e = t2.hasAttribute("readonly")) || t2.setAttribute("readonly", ""), t2.select(), t2.setSelectionRange(0, t2.value.length), e || t2.removeAttribute("readonly"), t2.value) : (t2.hasAttribute("contenteditable") && t2.focus(), n2 = window.getSelection(), (e = document.createRange()).selectNodeContents(t2), n2.removeAllRanges(), n2.addRange(e), n2.toString());
          return n2;
        };
      }, 279: function(t) {
        function e() {
        }
        e.prototype = { on: function(t2, e2, n2) {
          var o2 = this.e || (this.e = {});
          return (o2[t2] || (o2[t2] = [])).push({ fn: e2, ctx: n2 }), this;
        }, once: function(t2, e2, n2) {
          var o2 = this;
          function r2() {
            o2.off(t2, r2), e2.apply(n2, arguments);
          }
          return r2._ = e2, this.on(t2, r2, n2);
        }, emit: function(t2) {
          for (var e2 = [].slice.call(arguments, 1), n2 = ((this.e || (this.e = {}))[t2] || []).slice(), o2 = 0, r2 = n2.length; o2 < r2; o2++)
            n2[o2].fn.apply(n2[o2].ctx, e2);
          return this;
        }, off: function(t2, e2) {
          var n2 = this.e || (this.e = {}), o2 = n2[t2], r2 = [];
          if (o2 && e2)
            for (var i = 0, u = o2.length; i < u; i++)
              o2[i].fn !== e2 && o2[i].fn._ !== e2 && r2.push(o2[i]);
          return r2.length ? n2[t2] = r2 : delete n2[t2], this;
        } }, t.exports = e, t.exports.TinyEmitter = e;
      } }, r = {}, o.n = function(t) {
        var e = t && t.__esModule ? function() {
          return t.default;
        } : function() {
          return t;
        };
        return o.d(e, { a: e }), e;
      }, o.d = function(t, e) {
        for (var n2 in e)
          o.o(e, n2) && !o.o(t, n2) && Object.defineProperty(t, n2, { enumerable: true, get: e[n2] });
      }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, o(686).default;
      function o(t) {
        if (r[t])
          return r[t].exports;
        var e = r[t] = { exports: {} };
        return n[t](e, e.exports, o), e.exports;
      }
      var n, r;
    });
  }
});

// resources/js/services/events.js
var listeners = {};
var stack = [];
function emit(eventName, eventData) {
  stack.push({ name: eventName, data: eventData });
  if (typeof listeners[eventName] === "undefined")
    return this;
  let eventsToStart = listeners[eventName];
  for (let i = 0; i < eventsToStart.length; i++) {
    let event = eventsToStart[i];
    event(eventData);
  }
}
function listen(eventName, callback) {
  if (typeof listeners[eventName] === "undefined")
    listeners[eventName] = [];
  listeners[eventName].push(callback);
}
function emitPublic(targetElement, eventName, eventData) {
  const event = new CustomEvent(eventName, {
    detail: eventData,
    bubbles: true
  });
  targetElement.dispatchEvent(event);
}
function showValidationErrors(error2) {
  if (!error2.status)
    return;
  if (error2.status === 422 && error2.data) {
    const message = Object.values(error2.data).flat().join("\n");
    emit("error", message);
  }
}
var events_default = {
  emit,
  emitPublic,
  listen,
  success: (msg) => emit("success", msg),
  error: (msg) => emit("error", msg),
  showValidationErrors
};

// resources/js/services/http.js
async function get(url, params = {}) {
  return request(url, {
    method: "GET",
    params
  });
}
async function post(url, data = null) {
  return dataRequest("POST", url, data);
}
async function put(url, data = null) {
  return dataRequest("PUT", url, data);
}
async function patch(url, data = null) {
  return dataRequest("PATCH", url, data);
}
async function performDelete(url, data = null) {
  return dataRequest("DELETE", url, data);
}
async function dataRequest(method, url, data = null) {
  const options2 = {
    method,
    body: data
  };
  if (typeof data === "object" && !(data instanceof FormData)) {
    options2.headers = {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    };
    options2.body = JSON.stringify(data);
  }
  if (data instanceof FormData && method !== "post") {
    data.append("_method", method);
    options2.method = "post";
  }
  return request(url, options2);
}
async function request(url, options2 = {}) {
  if (!url.startsWith("http")) {
    url = window.baseUrl(url);
  }
  if (options2.params) {
    const urlObj = new URL(url);
    for (let paramName of Object.keys(options2.params)) {
      const value = options2.params[paramName];
      if (typeof value !== "undefined" && value !== null) {
        urlObj.searchParams.set(paramName, value);
      }
    }
    url = urlObj.toString();
  }
  const csrfToken = document.querySelector("meta[name=token]").getAttribute("content");
  options2 = Object.assign({}, options2, {
    "credentials": "same-origin"
  });
  options2.headers = Object.assign({}, options2.headers || {}, {
    "baseURL": window.baseUrl(""),
    "X-CSRF-TOKEN": csrfToken
  });
  const response = await fetch(url, options2);
  const content = await getResponseContent(response);
  const returnData = {
    data: content,
    headers: response.headers,
    redirected: response.redirected,
    status: response.status,
    statusText: response.statusText,
    url: response.url,
    original: response
  };
  if (!response.ok) {
    throw returnData;
  }
  return returnData;
}
async function getResponseContent(response) {
  if (response.status === 204) {
    return null;
  }
  const responseContentType = response.headers.get("Content-Type") || "";
  const subType = responseContentType.split(";")[0].split("/").pop();
  if (subType === "javascript" || subType === "json") {
    return await response.json();
  }
  return await response.text();
}
var http_default = {
  get,
  post,
  put,
  patch,
  delete: performDelete
};

// resources/js/services/translations.js
var Translator = class {
  constructor(translations) {
    this.store = /* @__PURE__ */ new Map();
    this.parseTranslations();
  }
  parseTranslations() {
    const translationMetaTags = document.querySelectorAll('meta[name="translation"]');
    for (let tag of translationMetaTags) {
      const key = tag.getAttribute("key");
      const value = tag.getAttribute("value");
      this.store.set(key, value);
    }
  }
  get(key, replacements) {
    const text = this.getTransText(key);
    return this.performReplacements(text, replacements);
  }
  getPlural(key, count, replacements) {
    const text = this.getTransText(key);
    return this.parsePlural(text, count, replacements);
  }
  parsePlural(translation, count, replacements) {
    const splitText = translation.split("|");
    const exactCountRegex = /^{([0-9]+)}/;
    const rangeRegex = /^\[([0-9]+),([0-9*]+)]/;
    let result = null;
    for (let t of splitText) {
      const exactMatches = t.match(exactCountRegex);
      if (exactMatches !== null && Number(exactMatches[1]) === count) {
        result = t.replace(exactCountRegex, "").trim();
        break;
      }
      const rangeMatches = t.match(rangeRegex);
      if (rangeMatches !== null) {
        const rangeStart = Number(rangeMatches[1]);
        if (rangeStart <= count && (rangeMatches[2] === "*" || Number(rangeMatches[2]) >= count)) {
          result = t.replace(rangeRegex, "").trim();
          break;
        }
      }
    }
    if (result === null && splitText.length > 1) {
      result = count === 1 ? splitText[0] : splitText[1];
    }
    if (result === null) {
      result = splitText[0];
    }
    return this.performReplacements(result, replacements);
  }
  getTransText(key) {
    const value = this.store.get(key);
    if (value === void 0) {
      console.warn(`Translation with key "${key}" does not exist`);
    }
    return value;
  }
  performReplacements(string, replacements) {
    if (!replacements)
      return string;
    const replaceMatches = string.match(/:([\S]+)/g);
    if (replaceMatches === null)
      return string;
    replaceMatches.forEach((match) => {
      const key = match.substring(1);
      if (typeof replacements[key] === "undefined")
        return;
      string = string.replace(match, replacements[key]);
    });
    return string;
  }
};
var translations_default = Translator;

// resources/js/services/dom.js
function forEach(selector, callback) {
  const elements = document.querySelectorAll(selector);
  for (let element of elements) {
    callback(element);
  }
}
function onEvents(listenerElement, events, callback) {
  for (let eventName of events) {
    listenerElement.addEventListener(eventName, callback);
  }
}
function onSelect(elements, callback) {
  if (!Array.isArray(elements)) {
    elements = [elements];
  }
  for (const listenerElement of elements) {
    listenerElement.addEventListener("click", callback);
    listenerElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        callback(event);
      }
    });
  }
}
function onEnterPress(elements, callback) {
  if (!Array.isArray(elements)) {
    elements = [elements];
  }
  const listener = (event) => {
    if (event.key === "Enter") {
      callback(event);
    }
  };
  elements.forEach((e) => e.addEventListener("keypress", listener));
}
function onChildEvent(listenerElement, childSelector, eventName, callback) {
  listenerElement.addEventListener(eventName, function(event) {
    const matchingChild = event.target.closest(childSelector);
    if (matchingChild) {
      callback.call(matchingChild, event, matchingChild);
    }
  });
}
function findText(selector, text) {
  const elements = document.querySelectorAll(selector);
  text = text.toLowerCase();
  for (let element of elements) {
    if (element.textContent.toLowerCase().includes(text)) {
      return element;
    }
  }
  return null;
}
function showLoading(element) {
  element.innerHTML = `<div class="loading-container"><div></div><div></div><div></div></div>`;
}
function removeLoading(element) {
  const loadingEls = element.querySelectorAll(".loading-container");
  for (const el of loadingEls) {
    el.remove();
  }
}

// resources/js/services/util.js
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}
function scrollAndHighlightElement(element) {
  if (!element)
    return;
  element.scrollIntoView({ behavior: "smooth" });
  const color = document.getElementById("custom-styles").getAttribute("data-color-light");
  const initColor = window.getComputedStyle(element).getPropertyValue("background-color");
  element.style.backgroundColor = color;
  setTimeout(() => {
    element.classList.add("selectFade");
    element.style.backgroundColor = initColor;
  }, 10);
  setTimeout(() => {
    element.classList.remove("selectFade");
    element.style.backgroundColor = "";
  }, 3e3);
}
function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function uniqueId() {
  const S4 = () => ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}

// resources/js/components/add-remove-rows.js
var AddRemoveRows = class {
  setup() {
    this.modelRow = this.$refs.model;
    this.addButton = this.$refs.add;
    this.removeSelector = this.$opts.removeSelector;
    this.rowSelector = this.$opts.rowSelector;
    this.setupListeners();
  }
  setupListeners() {
    this.addButton.addEventListener("click", this.add.bind(this));
    onChildEvent(this.$el, this.removeSelector, "click", (e) => {
      const row = e.target.closest(this.rowSelector);
      row.remove();
    });
  }
  add() {
    const clone2 = this.modelRow.cloneNode(true);
    clone2.classList.remove("hidden");
    this.setClonedInputNames(clone2);
    this.modelRow.parentNode.insertBefore(clone2, this.modelRow);
    window.components.init(clone2);
  }
  setClonedInputNames(clone2) {
    const rowId = uniqueId();
    const randRowIdElems = clone2.querySelectorAll(`[name*="randrowid"]`);
    for (const elem of randRowIdElems) {
      elem.name = elem.name.split("randrowid").join(rowId);
    }
  }
};
var add_remove_rows_default = AddRemoveRows;

// resources/js/components/ajax-delete-row.js
var AjaxDeleteRow = class {
  setup() {
    this.row = this.$el;
    this.url = this.$opts.url;
    this.deleteButtons = this.$manyRefs.delete;
    onSelect(this.deleteButtons, this.runDelete.bind(this));
  }
  runDelete() {
    this.row.style.opacity = "0.7";
    this.row.style.pointerEvents = "none";
    window.$http.delete(this.url).then((resp) => {
      if (typeof resp.data === "object" && resp.data.message) {
        window.$events.emit("success", resp.data.message);
      }
      this.row.remove();
    }).catch((err) => {
      this.row.style.opacity = null;
      this.row.style.pointerEvents = null;
    });
  }
};
var ajax_delete_row_default = AjaxDeleteRow;

// resources/js/components/ajax-form.js
var AjaxForm = class {
  setup() {
    this.container = this.$el;
    this.responseContainer = this.container;
    this.url = this.$opts.url;
    this.method = this.$opts.method || "post";
    this.successMessage = this.$opts.successMessage;
    this.submitButtons = this.$manyRefs.submit || [];
    if (this.$opts.responseContainer) {
      this.responseContainer = this.container.closest(this.$opts.responseContainer);
    }
    this.setupListeners();
  }
  setupListeners() {
    if (this.container.tagName === "FORM") {
      this.container.addEventListener("submit", this.submitRealForm.bind(this));
      return;
    }
    onEnterPress(this.container, (event) => {
      this.submitFakeForm();
      event.preventDefault();
    });
    this.submitButtons.forEach((button) => onSelect(button, this.submitFakeForm.bind(this)));
  }
  submitFakeForm() {
    const fd = new FormData();
    const inputs = this.container.querySelectorAll(`[name]`);
    for (const input of inputs) {
      fd.append(input.getAttribute("name"), input.value);
    }
    this.submit(fd);
  }
  submitRealForm(event) {
    event.preventDefault();
    const fd = new FormData(this.container);
    this.submit(fd);
  }
  async submit(formData) {
    this.responseContainer.style.opacity = "0.7";
    this.responseContainer.style.pointerEvents = "none";
    try {
      const resp = await window.$http[this.method.toLowerCase()](this.url, formData);
      this.$emit("success", { formData });
      this.responseContainer.innerHTML = resp.data;
      if (this.successMessage) {
        window.$events.emit("success", this.successMessage);
      }
    } catch (err) {
      this.responseContainer.innerHTML = err.data;
    }
    window.components.init(this.responseContainer);
    this.responseContainer.style.opacity = null;
    this.responseContainer.style.pointerEvents = null;
  }
};
var ajax_form_default = AjaxForm;

// resources/js/components/attachments.js
var Attachments = class {
  setup() {
    this.container = this.$el;
    this.pageId = this.$opts.pageId;
    this.editContainer = this.$refs.editContainer;
    this.listContainer = this.$refs.listContainer;
    this.mainTabs = this.$refs.mainTabs;
    this.list = this.$refs.list;
    this.setupListeners();
  }
  setupListeners() {
    const reloadListBound = this.reloadList.bind(this);
    this.container.addEventListener("dropzone-success", reloadListBound);
    this.container.addEventListener("ajax-form-success", reloadListBound);
    this.container.addEventListener("sortable-list-sort", (event) => {
      this.updateOrder(event.detail.ids);
    });
    this.container.addEventListener("event-emit-select-edit", (event) => {
      this.startEdit(event.detail.id);
    });
    this.container.addEventListener("event-emit-select-edit-back", (event) => {
      this.stopEdit();
    });
    this.container.addEventListener("event-emit-select-insert", (event) => {
      const insertContent = event.target.closest("[data-drag-content]").getAttribute("data-drag-content");
      const contentTypes = JSON.parse(insertContent);
      window.$events.emit("editor::insert", {
        html: contentTypes["text/html"],
        markdown: contentTypes["text/plain"]
      });
    });
  }
  reloadList() {
    this.stopEdit();
    this.mainTabs.components.tabs.show("items");
    window.$http.get(`/attachments/get/page/${this.pageId}`).then((resp) => {
      this.list.innerHTML = resp.data;
      window.components.init(this.list);
    });
  }
  updateOrder(idOrder) {
    window.$http.put(`/attachments/sort/page/${this.pageId}`, { order: idOrder }).then((resp) => {
      window.$events.emit("success", resp.data.message);
    });
  }
  async startEdit(id) {
    this.editContainer.classList.remove("hidden");
    this.listContainer.classList.add("hidden");
    showLoading(this.editContainer);
    const resp = await window.$http.get(`/attachments/edit/${id}`);
    this.editContainer.innerHTML = resp.data;
    window.components.init(this.editContainer);
  }
  stopEdit() {
    this.editContainer.classList.add("hidden");
    this.listContainer.classList.remove("hidden");
  }
};
var attachments_default = Attachments;

// resources/js/components/attachments-list.js
var AttachmentsList = class {
  setup() {
    this.container = this.$el;
    this.setupListeners();
  }
  setupListeners() {
    const isExpectedKey = (event) => event.key === "Control" || event.key === "Meta";
    window.addEventListener("keydown", (event) => {
      if (isExpectedKey(event)) {
        this.addOpenQueryToLinks();
      }
    }, { passive: true });
    window.addEventListener("keyup", (event) => {
      if (isExpectedKey(event)) {
        this.removeOpenQueryFromLinks();
      }
    }, { passive: true });
  }
  addOpenQueryToLinks() {
    const links = this.container.querySelectorAll("a.attachment-file");
    for (const link of links) {
      if (link.href.split("?")[1] !== "open=true") {
        link.href = link.href + "?open=true";
        link.setAttribute("target", "_blank");
      }
    }
  }
  removeOpenQueryFromLinks() {
    const links = this.container.querySelectorAll("a.attachment-file");
    for (const link of links) {
      link.href = link.href.split("?")[0];
      link.removeAttribute("target");
    }
  }
};
var attachments_list_default = AttachmentsList;

// resources/js/components/auto-suggest.js
var ajaxCache = {};
var AutoSuggest = class {
  setup() {
    this.parent = this.$el.parentElement;
    this.container = this.$el;
    this.type = this.$opts.type;
    this.url = this.$opts.url;
    this.input = this.$refs.input;
    this.list = this.$refs.list;
    this.lastPopulated = 0;
    this.setupListeners();
  }
  setupListeners() {
    this.input.addEventListener("input", this.requestSuggestions.bind(this));
    this.input.addEventListener("focus", this.requestSuggestions.bind(this));
    this.input.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        this.hideSuggestions();
      }
    });
    this.input.addEventListener("blur", this.hideSuggestionsIfFocusedLost.bind(this));
    this.container.addEventListener("keydown", this.containerKeyDown.bind(this));
    onChildEvent(this.list, "button", "click", (event, el) => {
      this.selectSuggestion(el.textContent);
    });
    onChildEvent(this.list, "button", "keydown", (event, el) => {
      if (event.key === "Enter") {
        this.selectSuggestion(el.textContent);
      }
    });
  }
  selectSuggestion(value) {
    this.input.value = value;
    this.lastPopulated = Date.now();
    this.input.focus();
    this.input.dispatchEvent(new Event("input", { bubbles: true }));
    this.input.dispatchEvent(new Event("change", { bubbles: true }));
    this.hideSuggestions();
  }
  containerKeyDown(event) {
    if (event.key === "Enter")
      event.preventDefault();
    if (this.list.classList.contains("hidden"))
      return;
    if (event.key === "ArrowDown") {
      this.moveFocus(true);
      event.preventDefault();
    } else if (event.key === "ArrowUp") {
      this.moveFocus(false);
      event.preventDefault();
    } else if (event.key === "Escape") {
      this.hideSuggestions();
      event.preventDefault();
    }
  }
  moveFocus(forward = true) {
    const focusables = Array.from(this.container.querySelectorAll("input,button"));
    const index2 = focusables.indexOf(document.activeElement);
    const newFocus = focusables[index2 + (forward ? 1 : -1)];
    if (newFocus) {
      newFocus.focus();
    }
  }
  async requestSuggestions() {
    if (Date.now() - this.lastPopulated < 50) {
      return;
    }
    const nameFilter = this.getNameFilterIfNeeded();
    const search = this.input.value.slice(0, 3).toLowerCase();
    const suggestions = await this.loadSuggestions(search, nameFilter);
    let toShow = suggestions.slice(0, 6);
    if (search.length > 0) {
      toShow = suggestions.filter((val) => {
        return val.toLowerCase().includes(search);
      }).slice(0, 6);
    }
    this.displaySuggestions(toShow);
  }
  getNameFilterIfNeeded() {
    if (this.type !== "value")
      return null;
    return this.parent.querySelector("input").value;
  }
  async loadSuggestions(search, nameFilter = null) {
    const params = { search, name: nameFilter };
    const cacheKey = `${this.url}:${JSON.stringify(params)}`;
    if (ajaxCache[cacheKey]) {
      return ajaxCache[cacheKey];
    }
    const resp = await window.$http.get(this.url, params);
    ajaxCache[cacheKey] = resp.data;
    return resp.data;
  }
  displaySuggestions(suggestions) {
    if (suggestions.length === 0) {
      return this.hideSuggestions();
    }
    this.list.innerHTML = suggestions.map((value) => `<li><button type="button">${escapeHtml(value)}</button></li>`).join("");
    this.list.style.display = "block";
    for (const button of this.list.querySelectorAll("button")) {
      button.addEventListener("blur", this.hideSuggestionsIfFocusedLost.bind(this));
    }
  }
  hideSuggestions() {
    this.list.style.display = "none";
  }
  hideSuggestionsIfFocusedLost(event) {
    if (!this.container.contains(event.relatedTarget)) {
      this.hideSuggestions();
    }
  }
};
var auto_suggest_default = AutoSuggest;

// resources/js/components/back-to-top.js
var BackToTop = class {
  constructor(elem) {
    this.elem = elem;
    this.targetElem = document.getElementById("header");
    this.showing = false;
    this.breakPoint = 1200;
    if (document.body.classList.contains("flexbox")) {
      this.elem.style.display = "none";
      return;
    }
    this.elem.addEventListener("click", this.scrollToTop.bind(this));
    window.addEventListener("scroll", this.onPageScroll.bind(this));
  }
  onPageScroll() {
    let scrollTopPos = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (!this.showing && scrollTopPos > this.breakPoint) {
      this.elem.style.display = "block";
      this.showing = true;
      setTimeout(() => {
        this.elem.style.opacity = 0.4;
      }, 1);
    } else if (this.showing && scrollTopPos < this.breakPoint) {
      this.elem.style.opacity = 0;
      this.showing = false;
      setTimeout(() => {
        this.elem.style.display = "none";
      }, 500);
    }
  }
  scrollToTop() {
    let targetTop = this.targetElem.getBoundingClientRect().top;
    let scrollElem = document.documentElement.scrollTop ? document.documentElement : document.body;
    let duration = 300;
    let start = Date.now();
    let scrollStart = this.targetElem.getBoundingClientRect().top;
    function setPos() {
      let percentComplete = 1 - (Date.now() - start) / duration;
      let target = Math.abs(percentComplete * scrollStart);
      if (percentComplete > 0) {
        scrollElem.scrollTop = target;
        requestAnimationFrame(setPos.bind(this));
      } else {
        scrollElem.scrollTop = targetTop;
      }
    }
    requestAnimationFrame(setPos.bind(this));
  }
};
var back_to_top_default = BackToTop;

// node_modules/sortablejs/modular/sortable.esm.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var version = "1.15.0";
function userAgent(pattern) {
  if (typeof window !== "undefined" && window.navigator) {
    return !!/* @__PURE__ */ navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el, selector) {
  if (!selector)
    return;
  selector[0] === ">" && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(el, selector, ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx)
        break;
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? "add" : "remove"](name);
    } else {
      var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
      el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, "");
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf("webkit") === -1) {
        prop = "-webkit-" + prop;
      }
      style[prop] = val + (typeof val === "string" ? "" : "px");
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = "";
  if (typeof el === "string") {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, "transform");
      if (transform && transform !== "none") {
        appliedTransforms = transform + " " + appliedTransforms;
      }
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window)
    return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    container = container || el.parentNode;
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
          var containerRect = container.getBoundingClientRect();
          top -= containerRect.top + parseInt(css(container, "border-top-width"));
          left -= containerRect.left + parseInt(css(container, "border-left-width"));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top,
    left,
    bottom,
    right,
    width,
    height
  };
}
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide], visible = void 0;
    if (parentSide === "top" || parentSide === "left") {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible)
      return parent;
    if (parent === getWindowScrollingElement())
      break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}
function getChild(el, childNum, options2, includeDragEl) {
  var currentChild = 0, i = 0, children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options2.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}
function index(el, selector) {
  var index2 = 0;
  if (!el || !el.parentNode) {
    return -1;
  }
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index2++;
    }
  }
  return index2;
}
function getRelativeScrollOffset(el) {
  var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i))
      continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key])
        return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  if (!el || !el.getBoundingClientRect)
    return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
        if (!elem.getBoundingClientRect || elem === document.body)
          return getWindowScrollingElement();
        if (gotSelf || includeSelf)
          return elem;
        gotSelf = true;
      }
    }
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function() {
    if (!_throttleTimeout) {
      var args = arguments, _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function() {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
var expando = "Sortable" + new Date().getTime();
function AnimationStateManager() {
  var animationStates = [], animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation)
        return;
      var children = [].slice.call(this.el.children);
      children.forEach(function(child) {
        if (css(child, "display") === "none" || child === Sortable.ghost)
          return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === "function")
          callback();
        return;
      }
      var animating = false, animationTime = 0;
      animationStates.forEach(function(state) {
        var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
        if (targetMatrix) {
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function() {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === "function")
          callback();
      } else {
        animationCallbackId = setTimeout(function() {
          if (typeof callback === "function")
            callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, "transition", "");
        css(target, "transform", "");
        var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
        this.forRepaintDummy = repaint(target);
        css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
        css(target, "transform", "translate3d(0,0,0)");
        typeof target.animated === "number" && clearTimeout(target.animated);
        target.animated = setTimeout(function() {
          css(target, "transition", "");
          css(target, "transform", "");
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options2) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options2.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    for (var option2 in defaults) {
      if (defaults.hasOwnProperty(option2) && !(option2 in plugin)) {
        plugin[option2] = defaults[option2];
      }
    }
    plugins.forEach(function(p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function() {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + "Global";
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable
        }, evt));
      }
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults2, options2) {
    plugins.forEach(function(plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault)
        return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;
      _extends(defaults2, initialized.defaults);
    });
    for (var option2 in sortable.options) {
      if (!sortable.options.hasOwnProperty(option2))
        continue;
      var modified = this.modifyOption(sortable, option2, sortable.options[option2]);
      if (typeof modified !== "undefined") {
        sortable.options[option2] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function(plugin) {
      if (typeof plugin.eventProperties !== "function")
        return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable, rootEl2 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl2 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex2 = _ref.oldIndex, newIndex2 = _ref.newIndex, oldDraggableIndex2 = _ref.oldDraggableIndex, newDraggableIndex2 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl2 && rootEl2[expando];
  if (!sortable)
    return;
  var evt, options2 = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl2;
  evt.from = fromEl || rootEl2;
  evt.item = targetEl || rootEl2;
  evt.clone = cloneEl2;
  evt.oldIndex = oldIndex2;
  evt.newIndex = newIndex2;
  evt.oldDraggableIndex = oldDraggableIndex2;
  evt.newDraggableIndex = newDraggableIndex2;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable2 ? putSortable2.lastPutMode : void 0;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option2 in allEventProperties) {
    evt[option2] = allEventProperties[option2];
  }
  if (rootEl2) {
    rootEl2.dispatchEvent(evt);
  }
  if (options2[onName]) {
    options2[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent2 = function pluginEvent3(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    dragStarted: moved,
    putSortable,
    activeSortable: Sortable.active,
    originalEvent,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable,
        name,
        originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable,
    cloneEl,
    targetEl: dragEl,
    rootEl,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex
  }, info));
}
var dragEl;
var parentEl;
var ghostEl;
var rootEl;
var nextEl;
var lastDownEl;
var cloneEl;
var cloneHidden;
var oldIndex;
var newIndex;
var oldDraggableIndex;
var newDraggableIndex;
var activeGroup;
var putSortable;
var awaitingDragStarted = false;
var ignoreNextClick = false;
var sortables = [];
var tapEvt;
var touchEvt;
var lastDx;
var lastDy;
var tapDistanceLeft;
var tapDistanceTop;
var moved;
var lastTarget;
var lastDirection;
var pastFirstInvertThresh = false;
var isCircumstantialInvert = false;
var targetMoveDistance;
var ghostRelativeParent;
var ghostRelativeParentInitialScroll = [];
var _silent = false;
var savedInputChecked = [];
var documentExists = typeof document !== "undefined";
var PositionGhostAbsolutely = IOS;
var CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float";
var supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div");
var supportCssPointerEvents = function() {
  if (!documentExists)
    return;
  if (IE11OrLess) {
    return false;
  }
  var el = document.createElement("x");
  el.style.cssText = "pointer-events:auto";
  return el.style.pointerEvents === "auto";
}();
var _detectDirection = function _detectDirection2(el, options2) {
  var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options2), child2 = getChild(el, 1, options2), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
  if (elCSS.display === "flex") {
    return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  }
  if (elCSS.display === "grid") {
    return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  }
  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
    var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
    return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
  }
  return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
};
var _dragElInRowColumn = function _dragElInRowColumn2(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
};
var _detectNearestEmptySortable = function _detectNearestEmptySortable2(x, y) {
  var ret;
  sortables.some(function(sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable))
      return;
    var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
};
var _prepareGroup = function _prepareGroup2(options2) {
  function toFn(value, pull) {
    return function(to, from, dragEl2, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
      if (value == null && (pull || sameGroup)) {
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === "clone") {
        return value;
      } else if (typeof value === "function") {
        return toFn(value(to, from, dragEl2, evt), pull)(to, from, dragEl2, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }
  var group = {};
  var originalGroup = options2.group;
  if (!originalGroup || _typeof(originalGroup) != "object") {
    originalGroup = {
      name: originalGroup
    };
  }
  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options2.group = group;
};
var _hideGhostForTarget = function _hideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "none");
  }
};
var _unhideGhostForTarget = function _unhideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "");
  }
};
if (documentExists && !ChromeForAndroid) {
  document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent2(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl2(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
function Sortable(el, options2) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el;
  this.options = options2 = _extends({}, options2);
  el[expando] = this;
  var defaults2 = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: false,
    invertedSwapThreshold: null,
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl2) {
      dataTransfer.setData("Text", dragEl2.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults2);
  for (var name in defaults2) {
    !(name in options2) && (options2[name] = defaults2[name]);
  }
  _prepareGroup(options2);
  for (var fn in this) {
    if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
      this[fn] = this[fn].bind(this);
    }
  }
  this.nativeDraggable = options2.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    this.options.touchStartThreshold = 1;
  }
  if (options2.supportPointer) {
    on(el, "pointerdown", this._onTapStart);
  } else {
    on(el, "mousedown", this._onTapStart);
    on(el, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, "dragover", this);
    on(el, "dragenter", this);
  }
  sortables.push(this.el);
  options2.store && options2.store.get && this.sort(options2.store.get(this) || []);
  _extends(this, AnimationStateManager());
}
Sortable.prototype = {
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(evt) {
    if (!evt.cancelable)
      return;
    var _this = this, el = this.el, options2 = this.options, preventOnFilter = options2.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options2.filter;
    _saveInputCheckedState(el);
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options2.disabled) {
      return;
    }
    if (originalTarget.isContentEditable) {
      return;
    }
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") {
      return;
    }
    target = closest(target, options2.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      return;
    }
    oldIndex = index(target);
    oldDraggableIndex = index(target, options2.draggable);
    if (typeof filter === "function") {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: "filter",
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent2("filter", _this, {
          evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    } else if (filter) {
      filter = filter.split(",").some(function(criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: "filter",
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent2("filter", _this, {
            evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    }
    if (options2.handle && !closest(originalTarget, options2.handle, el, false)) {
      return;
    }
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(evt, touch, target) {
    var _this = this, el = _this.el, options2 = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options2.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style["will-change"] = "all";
      dragStartFn = function dragStartFn2() {
        pluginEvent2("delayEnded", _this, {
          evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }
        _this._triggerDragStart(evt, touch);
        _dispatchEvent({
          sortable: _this,
          name: "choose",
          originalEvent: evt
        });
        toggleClass(dragEl, options2.chosenClass, true);
      };
      options2.ignore.split(",").forEach(function(criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mouseup", _this._onDrop);
      on(ownerDocument, "touchend", _this._onDrop);
      on(ownerDocument, "touchcancel", _this._onDrop);
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent2("delayStart", this, {
        evt
      });
      if (options2.delay && (!options2.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        on(ownerDocument, "mouseup", _this._disableDelayedDrag);
        on(ownerDocument, "touchend", _this._disableDelayedDrag);
        on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
        on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
        on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
        options2.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options2.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._disableDelayedDrag);
    off(ownerDocument, "touchend", this._disableDelayedDrag);
    off(ownerDocument, "touchcancel", this._disableDelayedDrag);
    off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(evt, touch) {
    touch = touch || evt.pointerType == "touch" && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, "pointermove", this._onTouchMove);
      } else if (touch) {
        on(document, "touchmove", this._onTouchMove);
      } else {
        on(document, "mousemove", this._onTouchMove);
      }
    } else {
      on(dragEl, "dragend", this);
      on(rootEl, "dragstart", this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function() {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {
    }
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent2("dragStarted", this, {
        evt
      });
      if (this.nativeDraggable) {
        on(document, "dragover", _checkOutsideTargetEl);
      }
      var options2 = this.options;
      !fallback && toggleClass(dragEl, options2.dragClass, false);
      toggleClass(dragEl, options2.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();
      _dispatchEvent({
        sortable: this,
        name: "start",
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent)
          break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent;
        } while (parent = parent.parentNode);
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(evt) {
    if (tapEvt) {
      var options2 = this.options, fallbackTolerance = options2.fallbackTolerance, fallbackOffset = options2.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, "webkitTransform", cssMatrix);
        css(ghostEl, "mozTransform", cssMatrix);
        css(ghostEl, "msTransform", cssMatrix);
        css(ghostEl, "transform", cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options2 = this.options;
      if (PositionGhostAbsolutely) {
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document)
            ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options2.ghostClass, false);
      toggleClass(ghostEl, options2.fallbackClass, true);
      toggleClass(ghostEl, options2.dragClass, true);
      css(ghostEl, "transition", "");
      css(ghostEl, "transform", "");
      css(ghostEl, "box-sizing", "border-box");
      css(ghostEl, "margin", 0);
      css(ghostEl, "top", rect.top);
      css(ghostEl, "left", rect.left);
      css(ghostEl, "width", rect.width);
      css(ghostEl, "height", rect.height);
      css(ghostEl, "opacity", "0.8");
      css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
      css(ghostEl, "zIndex", "100000");
      css(ghostEl, "pointerEvents", "none");
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);
      css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
    }
  },
  _onDragStart: function _onDragStart(evt, fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options2 = _this.options;
    pluginEvent2("dragStart", this, {
      evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent2("setupClone", this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style["will-change"] = "";
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }
    _this.cloneId = _nextTick(function() {
      pluginEvent2("clone", _this);
      if (Sortable.eventCanceled)
        return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: "clone"
      });
    });
    !fallback && toggleClass(dragEl, options2.dragClass, true);
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      off(document, "mouseup", _this._onDrop);
      off(document, "touchend", _this._onDrop);
      off(document, "touchcancel", _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = "move";
        options2.setData && options2.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, "drop", _this);
      css(dragEl, "transform", "translateZ(0)");
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, "selectstart", _this);
    moved = true;
    if (Safari) {
      css(document.body, "user-select", "none");
    }
  },
  _onDragOver: function _onDragOver(evt) {
    var el = this.el, target = evt.target, dragRect, targetRect, revert, options2 = this.options, group = options2.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options2.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
    if (_silent)
      return;
    function dragOverEvent(name, extra) {
      pluginEvent2(name, _this, _objectSpread2({
        evt,
        isOwner,
        axis: vertical ? "vertical" : "horizontal",
        revert,
        dragRect,
        targetRect,
        canSort,
        fromSortable,
        target,
        completed,
        onMove: function onMove(target2, after2) {
          return _onMove(rootEl, el, dragEl, dragRect, target2, getRect(target2), evt, after2);
        },
        changed
      }, extra));
    }
    function capture() {
      dragOverEvent("dragOverAnimationCapture");
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }
    function completed(insertion) {
      dragOverEvent("dragOverCompleted", {
        insertion
      });
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options2.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function() {
          dragOverEvent("dragOverAnimationComplete");
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }
      if (!options2.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options2.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options2.draggable);
      _dispatchEvent({
        sortable: _this,
        name: "change",
        toEl: el,
        newIndex,
        newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options2.draggable, el, true);
    dragOverEvent("dragOver");
    if (Sortable.eventCanceled)
      return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options2.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === "vertical";
      dragRect = getRect(dragEl);
      dragOverEvent("dragOverValid");
      if (Sortable.eventCanceled)
        return completedFired;
      if (revert) {
        parentEl = rootEl;
        capture();
        this._hideClone();
        dragOverEvent("revert");
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options2.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        if (elLastChild === dragEl) {
          return completed(false);
        }
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        var firstChild = getChild(el, 0, options2, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options2.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options2.swapThreshold, options2.invertedSwapThreshold == null ? options2.swapThreshold : options2.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
        }
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling, after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode;
          if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, "mousemove", this._onTouchMove);
    off(document, "touchmove", this._onTouchMove);
    off(document, "pointermove", this._onTouchMove);
    off(document, "dragover", nearestEmptyInsertDetectEvent);
    off(document, "mousemove", nearestEmptyInsertDetectEvent);
    off(document, "touchmove", nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._onDrop);
    off(ownerDocument, "touchend", this._onDrop);
    off(ownerDocument, "pointerup", this._onDrop);
    off(ownerDocument, "touchcancel", this._onDrop);
    off(document, "selectstart", this);
  },
  _onDrop: function _onDrop(evt) {
    var el = this.el, options2 = this.options;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options2.draggable);
    pluginEvent2("drop", this, {
      evt
    });
    parentEl = dragEl && dragEl.parentNode;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options2.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);
    if (this.nativeDraggable) {
      off(document, "drop", this);
      off(el, "dragstart", this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, "user-select", "");
    }
    css(dragEl, "transform", "");
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options2.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, "dragend", this);
        }
        _disableDraggable(dragEl);
        dragEl.style["will-change"] = "";
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);
        _dispatchEvent({
          sortable: this,
          name: "unchoose",
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            _dispatchEvent({
              rootEl: parentEl,
              name: "add",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "remove",
              toEl: parentEl,
              originalEvent: evt
            });
            _dispatchEvent({
              rootEl: parentEl,
              name: "sort",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "sort",
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              _dispatchEvent({
                sortable: this,
                name: "update",
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: "end",
            toEl: parentEl,
            originalEvent: evt
          });
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent2("nulling", this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function(el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(evt) {
    switch (evt.type) {
      case "drop":
      case "dragend":
        this._onDrop(evt);
        break;
      case "dragenter":
      case "dragover":
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case "selectstart":
        evt.preventDefault();
        break;
    }
  },
  toArray: function toArray() {
    var order = [], el, children = this.el.children, i = 0, n = children.length, options2 = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options2.draggable, this.el, false)) {
        order.push(el.getAttribute(options2.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  sort: function sort(order, useAnimation) {
    var items = {}, rootEl2 = this.el;
    this.toArray().forEach(function(id, i) {
      var el = rootEl2.children[i];
      if (closest(el, this.options.draggable, rootEl2, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function(id) {
      if (items[id]) {
        rootEl2.removeChild(items[id]);
        rootEl2.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  option: function option(name, value) {
    var options2 = this.options;
    if (value === void 0) {
      return options2[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== "undefined") {
        options2[name] = modifiedValue;
      } else {
        options2[name] = value;
      }
      if (name === "group") {
        _prepareGroup(options2);
      }
    }
  },
  destroy: function destroy() {
    pluginEvent2("destroy", this);
    var el = this.el;
    el[expando] = null;
    off(el, "mousedown", this._onTapStart);
    off(el, "touchstart", this._onTapStart);
    off(el, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      off(el, "dragover", this);
      off(el, "dragenter", this);
    }
    Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el2) {
      el2.removeAttribute("draggable");
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent2("hideClone", this);
      if (Sortable.eventCanceled)
        return;
      css(cloneEl, "display", "none");
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable2) {
    if (putSortable2.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent2("showClone", this);
      if (Sortable.eventCanceled)
        return;
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, "display", "");
      cloneHidden = false;
    }
  }
};
function _globalDragOver(evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = "move";
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl2, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent("move", {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent("move", true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl2;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
  if (!invertSwap) {
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName("input");
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}
if (documentExists) {
  on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}
Sortable.utils = {
  on,
  off,
  css,
  find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend,
  throttle,
  closest,
  toggleClass,
  clone,
  index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild
};
Sortable.get = function(element) {
  return element[expando];
};
Sortable.mount = function() {
  for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins2[_key] = arguments[_key];
  }
  if (plugins2[0].constructor === Array)
    plugins2 = plugins2[0];
  plugins2.forEach(function(plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils)
      Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
Sortable.create = function(el, options2) {
  return new Sortable(el, options2);
};
Sortable.version = version;
var autoScrolls = [];
var scrollEl;
var scrollRootEl;
var scrolling = false;
var lastAutoScrollX;
var lastAutoScrollY;
var touchEvt$1;
var pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, "dragover", this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, "pointermove", this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, "touchmove", this._handleFallbackAutoScroll);
        } else {
          on(document, "mousemove", this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop4() {
      if (this.sortable.nativeDraggable) {
        off(document, "dragover", this._handleAutoScroll);
      } else {
        off(document, "pointermove", this._handleFallbackAutoScroll);
        off(document, "touchmove", this._handleFallbackAutoScroll);
        off(document, "mousemove", this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          pointerElemChangedInterval = setInterval(function() {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function(autoScroll2) {
    clearInterval(autoScroll2.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options2, rootEl2, isFallback) {
  if (!options2.scroll)
    return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options2.scrollSensitivity, speed = options2.scrollSpeed, winScroller = getWindowScrollingElement();
  var scrollThisInstance = false, scrollCustomFn;
  if (scrollRootEl !== rootEl2) {
    scrollRootEl = rootEl2;
    clearAutoScrolls();
    scrollEl = options2.scroll;
    scrollCustomFn = options2.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl2, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        autoScrolls[layersOut].pid = setInterval(function() {
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1);
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === "function") {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options2.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance;
}, 30);
var drop = function drop2(_ref) {
  var originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, dragEl2 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent)
    return;
  var toSortable = putSortable2 || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent("spill");
    this.onSpill({
      dragEl: dragEl2,
      putSortable: putSortable2
    });
  }
};
function Revert() {
}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex2 = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex2;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl2 = _ref3.dragEl, putSortable2 = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable2) {
      putSortable2.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl2, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl2);
    }
    this.sortable.animateAll();
    if (putSortable2) {
      putSortable2.animateAll();
    }
  },
  drop
};
_extends(Revert, {
  pluginName: "revertOnSpill"
});
function Remove() {
}
Remove.prototype = {
  onSpill: function onSpill2(_ref4) {
    var dragEl2 = _ref4.dragEl, putSortable2 = _ref4.putSortable;
    var parentSortable = putSortable2 || this.sortable;
    parentSortable.captureAnimationState();
    dragEl2.parentNode && dragEl2.parentNode.removeChild(dragEl2);
    parentSortable.animateAll();
  },
  drop
};
_extends(Remove, {
  pluginName: "removeOnSpill"
});
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
var sortable_esm_default = Sortable;

// resources/js/components/book-sort.js
var sortOperations = {
  name: function(a, b) {
    const aName = a.getAttribute("data-name").trim().toLowerCase();
    const bName = b.getAttribute("data-name").trim().toLowerCase();
    return aName.localeCompare(bName);
  },
  created: function(a, b) {
    const aTime = Number(a.getAttribute("data-created"));
    const bTime = Number(b.getAttribute("data-created"));
    return bTime - aTime;
  },
  updated: function(a, b) {
    const aTime = Number(a.getAttribute("data-updated"));
    const bTime = Number(b.getAttribute("data-updated"));
    return bTime - aTime;
  },
  chaptersFirst: function(a, b) {
    const aType = a.getAttribute("data-type");
    const bType = b.getAttribute("data-type");
    if (aType === bType) {
      return 0;
    }
    return aType === "chapter" ? -1 : 1;
  },
  chaptersLast: function(a, b) {
    const aType = a.getAttribute("data-type");
    const bType = b.getAttribute("data-type");
    if (aType === bType) {
      return 0;
    }
    return aType === "chapter" ? 1 : -1;
  }
};
var BookSort = class {
  constructor(elem) {
    this.elem = elem;
    this.sortContainer = elem.querySelector("[book-sort-boxes]");
    this.input = elem.querySelector("[book-sort-input]");
    const initialSortBox = elem.querySelector(".sort-box");
    this.setupBookSortable(initialSortBox);
    this.setupSortPresets();
    window.$events.listen("entity-select-confirm", this.bookSelect.bind(this));
  }
  setupSortPresets() {
    let lastSort = "";
    let reverse = false;
    const reversibleTypes = ["name", "created", "updated"];
    this.sortContainer.addEventListener("click", (event) => {
      const sortButton = event.target.closest(".sort-box-options [data-sort]");
      if (!sortButton)
        return;
      event.preventDefault();
      const sortLists = sortButton.closest(".sort-box").querySelectorAll("ul");
      const sort2 = sortButton.getAttribute("data-sort");
      reverse = lastSort === sort2 ? !reverse : false;
      let sortFunction = sortOperations[sort2];
      if (reverse && reversibleTypes.includes(sort2)) {
        sortFunction = function(a, b) {
          return 0 - sortOperations[sort2](a, b);
        };
      }
      for (let list of sortLists) {
        const directItems = Array.from(list.children).filter((child) => child.matches("li"));
        directItems.sort(sortFunction).forEach((sortedItem) => {
          list.appendChild(sortedItem);
        });
      }
      lastSort = sort2;
      this.updateMapInput();
    });
  }
  bookSelect(entityInfo) {
    const alreadyAdded = this.elem.querySelector(`[data-type="book"][data-id="${entityInfo.id}"]`) !== null;
    if (alreadyAdded)
      return;
    const entitySortItemUrl = entityInfo.link + "/sort-item";
    window.$http.get(entitySortItemUrl).then((resp) => {
      const wrap2 = document.createElement("div");
      wrap2.innerHTML = resp.data;
      const newBookContainer = wrap2.children[0];
      this.sortContainer.append(newBookContainer);
      this.setupBookSortable(newBookContainer);
    });
  }
  setupBookSortable(bookContainer) {
    const sortElems = [bookContainer.querySelector(".sort-list")];
    sortElems.push(...bookContainer.querySelectorAll(".entity-list-item + ul"));
    const bookGroupConfig = {
      name: "book",
      pull: ["book", "chapter"],
      put: ["book", "chapter"]
    };
    const chapterGroupConfig = {
      name: "chapter",
      pull: ["book", "chapter"],
      put: function(toList, fromList, draggedElem) {
        return draggedElem.getAttribute("data-type") === "page";
      }
    };
    for (let sortElem of sortElems) {
      new sortable_esm_default(sortElem, {
        group: sortElem.classList.contains("sort-list") ? bookGroupConfig : chapterGroupConfig,
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        onSort: this.updateMapInput.bind(this),
        dragClass: "bg-white",
        ghostClass: "primary-background-light",
        multiDrag: true,
        multiDragKey: "CTRL",
        selectedClass: "sortable-selected"
      });
    }
  }
  updateMapInput() {
    const pageMap = this.buildEntityMap();
    this.input.value = JSON.stringify(pageMap);
  }
  buildEntityMap() {
    const entityMap = [];
    const lists = this.elem.querySelectorAll(".sort-list");
    for (let list of lists) {
      const bookId = list.closest('[data-type="book"]').getAttribute("data-id");
      const directChildren = Array.from(list.children).filter((elem) => elem.matches('[data-type="page"], [data-type="chapter"]'));
      for (let i = 0; i < directChildren.length; i++) {
        this.addBookChildToMap(directChildren[i], i, bookId, entityMap);
      }
    }
    return entityMap;
  }
  addBookChildToMap(childElem, index2, bookId, entityMap) {
    const type = childElem.getAttribute("data-type");
    const parentChapter = false;
    const childId = childElem.getAttribute("data-id");
    entityMap.push({
      id: childId,
      sort: index2,
      parentChapter,
      type,
      book: bookId
    });
    const subPages = childElem.querySelectorAll('[data-type="page"]');
    for (let i = 0; i < subPages.length; i++) {
      entityMap.push({
        id: subPages[i].getAttribute("data-id"),
        sort: i,
        parentChapter: childId,
        type: "page",
        book: bookId
      });
    }
  }
};
var book_sort_default = BookSort;

// resources/js/services/animations.js
var animateStylesCleanupMap = /* @__PURE__ */ new WeakMap();
function fadeIn(element, animTime = 400, onComplete = null) {
  cleanupExistingElementAnimation(element);
  element.style.display = "block";
  animateStyles(element, {
    opacity: ["0", "1"]
  }, animTime, () => {
    if (onComplete)
      onComplete();
  });
}
function fadeOut(element, animTime = 400, onComplete = null) {
  cleanupExistingElementAnimation(element);
  animateStyles(element, {
    opacity: ["1", "0"]
  }, animTime, () => {
    element.style.display = "none";
    if (onComplete)
      onComplete();
  });
}
function slideUp(element, animTime = 400) {
  cleanupExistingElementAnimation(element);
  const currentHeight = element.getBoundingClientRect().height;
  const computedStyles = getComputedStyle(element);
  const currentPaddingTop = computedStyles.getPropertyValue("padding-top");
  const currentPaddingBottom = computedStyles.getPropertyValue("padding-bottom");
  const animStyles = {
    height: [`${currentHeight}px`, "0px"],
    overflow: ["hidden", "hidden"],
    paddingTop: [currentPaddingTop, "0px"],
    paddingBottom: [currentPaddingBottom, "0px"]
  };
  animateStyles(element, animStyles, animTime, () => {
    element.style.display = "none";
  });
}
function slideDown(element, animTime = 400) {
  cleanupExistingElementAnimation(element);
  element.style.display = "block";
  const targetHeight = element.getBoundingClientRect().height;
  const computedStyles = getComputedStyle(element);
  const targetPaddingTop = computedStyles.getPropertyValue("padding-top");
  const targetPaddingBottom = computedStyles.getPropertyValue("padding-bottom");
  const animStyles = {
    height: ["0px", `${targetHeight}px`],
    overflow: ["hidden", "hidden"],
    paddingTop: ["0px", targetPaddingTop],
    paddingBottom: ["0px", targetPaddingBottom]
  };
  animateStyles(element, animStyles, animTime);
}
function animateStyles(element, styles, animTime = 400, onComplete = null) {
  const styleNames = Object.keys(styles);
  for (let style of styleNames) {
    element.style[style] = styles[style][0];
  }
  const cleanup = () => {
    for (let style of styleNames) {
      element.style[style] = null;
    }
    element.style.transition = null;
    element.removeEventListener("transitionend", cleanup);
    animateStylesCleanupMap.delete(element);
    if (onComplete)
      onComplete();
  };
  setTimeout(() => {
    element.style.transition = `all ease-in-out ${animTime}ms`;
    for (let style of styleNames) {
      element.style[style] = styles[style][1];
    }
    element.addEventListener("transitionend", cleanup);
    animateStylesCleanupMap.set(element, cleanup);
  }, 15);
}
function cleanupExistingElementAnimation(element) {
  if (animateStylesCleanupMap.has(element)) {
    const oldCleanup = animateStylesCleanupMap.get(element);
    oldCleanup();
  }
}

// resources/js/components/chapter-toggle.js
var ChapterToggle = class {
  constructor(elem) {
    this.elem = elem;
    this.isOpen = elem.classList.contains("open");
    elem.addEventListener("click", this.click.bind(this));
  }
  open() {
    const list = this.elem.parentNode.querySelector(".inset-list");
    this.elem.classList.add("open");
    this.elem.setAttribute("aria-expanded", "true");
    slideDown(list, 240);
  }
  close() {
    const list = this.elem.parentNode.querySelector(".inset-list");
    this.elem.classList.remove("open");
    this.elem.setAttribute("aria-expanded", "false");
    slideUp(list, 240);
  }
  click(event) {
    event.preventDefault();
    this.isOpen ? this.close() : this.open();
    this.isOpen = !this.isOpen;
  }
};
var chapter_toggle_default = ChapterToggle;

// resources/js/components/code-editor.js
var CodeEditor = class {
  setup() {
    this.container = this.$refs.container;
    this.popup = this.$el;
    this.editorInput = this.$refs.editor;
    this.languageLinks = this.$manyRefs.languageLink;
    this.saveButton = this.$refs.saveButton;
    this.languageInput = this.$refs.languageInput;
    this.historyDropDown = this.$refs.historyDropDown;
    this.historyList = this.$refs.historyList;
    this.callback = null;
    this.editor = null;
    this.history = {};
    this.historyKey = "code_history";
    this.setupListeners();
  }
  setupListeners() {
    this.container.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "Enter") {
        this.save();
      }
    });
    onSelect(this.languageLinks, (event) => {
      const language = event.target.dataset.lang;
      this.languageInput.value = language;
      this.updateEditorMode(language);
    });
    onEnterPress(this.languageInput, (e) => this.save());
    onSelect(this.saveButton, (e) => this.save());
    onChildEvent(this.historyList, "button", "click", (event, elem) => {
      event.preventDefault();
      const historyTime = elem.dataset.time;
      if (this.editor) {
        this.editor.setValue(this.history[historyTime]);
      }
    });
  }
  save() {
    if (this.callback) {
      this.callback(this.editor.getValue(), this.languageInput.value);
    }
    this.hide();
  }
  open(code, language, callback) {
    this.languageInput.value = language;
    this.callback = callback;
    this.show().then(() => this.updateEditorMode(language)).then(() => window.importVersioned("code")).then((Code) => Code.setContent(this.editor, code));
  }
  async show() {
    const Code = await window.importVersioned("code");
    if (!this.editor) {
      this.editor = Code.popupEditor(this.editorInput, this.languageInput.value);
    }
    this.loadHistory();
    this.popup.components.popup.show(() => {
      Code.updateLayout(this.editor);
      this.editor.focus();
    }, () => {
      this.addHistory();
    });
  }
  hide() {
    this.popup.components.popup.hide();
    this.addHistory();
  }
  async updateEditorMode(language) {
    const Code = await window.importVersioned("code");
    Code.setMode(this.editor, language, this.editor.getValue());
  }
  loadHistory() {
    this.history = JSON.parse(window.sessionStorage.getItem(this.historyKey) || "{}");
    const historyKeys = Object.keys(this.history).reverse();
    this.historyDropDown.classList.toggle("hidden", historyKeys.length === 0);
    this.historyList.innerHTML = historyKeys.map((key) => {
      const localTime = new Date(parseInt(key)).toLocaleTimeString();
      return `<li><button type="button" data-time="${key}">${localTime}</button></li>`;
    }).join("");
  }
  addHistory() {
    if (!this.editor)
      return;
    const code = this.editor.getValue();
    if (!code)
      return;
    const lastHistoryKey = Object.keys(this.history).pop();
    if (this.history[lastHistoryKey] === code)
      return;
    this.history[String(Date.now())] = code;
    const historyString = JSON.stringify(this.history);
    window.sessionStorage.setItem(this.historyKey, historyString);
  }
};
var code_editor_default = CodeEditor;

// resources/js/components/code-highlighter.js
var CodeHighlighter = class {
  constructor(elem) {
    const codeBlocks = elem.querySelectorAll("pre");
    if (codeBlocks.length > 0) {
      window.importVersioned("code").then((Code) => {
        Code.highlightWithin(elem);
      });
    }
  }
};
var code_highlighter_default = CodeHighlighter;

// resources/js/components/collapsible.js
var Collapsible = class {
  constructor(elem) {
    this.elem = elem;
    this.trigger = elem.querySelector("[collapsible-trigger]");
    this.content = elem.querySelector("[collapsible-content]");
    if (!this.trigger)
      return;
    this.trigger.addEventListener("click", this.toggle.bind(this));
    this.openIfContainsError();
  }
  open() {
    this.elem.classList.add("open");
    this.trigger.setAttribute("aria-expanded", "true");
    slideDown(this.content, 300);
  }
  close() {
    this.elem.classList.remove("open");
    this.trigger.setAttribute("aria-expanded", "false");
    slideUp(this.content, 300);
  }
  toggle() {
    if (this.elem.classList.contains("open")) {
      this.close();
    } else {
      this.open();
    }
  }
  openIfContainsError() {
    const error2 = this.content.querySelector(".text-neg.text-small");
    if (error2) {
      this.open();
    }
  }
};
var collapsible_default = Collapsible;

// resources/js/components/custom-checkbox.js
var CustomCheckbox = class {
  constructor(elem) {
    this.elem = elem;
    this.checkbox = elem.querySelector("input[type=checkbox]");
    this.display = elem.querySelector('[role="checkbox"]');
    this.checkbox.addEventListener("change", this.stateChange.bind(this));
    this.elem.addEventListener("keydown", this.onKeyDown.bind(this));
  }
  onKeyDown(event) {
    const isEnterOrPress = event.keyCode === 32 || event.keyCode === 13;
    if (isEnterOrPress) {
      event.preventDefault();
      this.toggle();
    }
  }
  toggle() {
    this.checkbox.checked = !this.checkbox.checked;
    this.checkbox.dispatchEvent(new Event("change"));
    this.stateChange();
  }
  stateChange() {
    const checked = this.checkbox.checked ? "true" : "false";
    this.display.setAttribute("aria-checked", checked);
  }
};
var custom_checkbox_default = CustomCheckbox;

// resources/js/components/details-highlighter.js
var DetailsHighlighter = class {
  constructor(elem) {
    this.elem = elem;
    this.dealtWith = false;
    elem.addEventListener("toggle", this.onToggle.bind(this));
  }
  onToggle() {
    if (this.dealtWith)
      return;
    if (this.elem.querySelector("pre")) {
      window.importVersioned("code").then((Code) => {
        Code.highlightWithin(this.elem);
      });
    }
    this.dealtWith = true;
  }
};
var details_highlighter_default = DetailsHighlighter;

// resources/js/components/dropdown.js
var DropDown = class {
  setup() {
    this.container = this.$el;
    this.menu = this.$refs.menu;
    this.toggle = this.$refs.toggle;
    this.moveMenu = this.$opts.moveMenu;
    this.bubbleEscapes = this.$opts.bubbleEscapes === "true";
    this.direction = document.dir === "rtl" ? "right" : "left";
    this.body = document.body;
    this.showing = false;
    this.setupListeners();
    this.hide = this.hide.bind(this);
  }
  show(event = null) {
    this.hideAll();
    this.menu.style.display = "block";
    this.menu.classList.add("anim", "menuIn");
    this.toggle.setAttribute("aria-expanded", "true");
    if (this.moveMenu) {
      this.rect = this.menu.getBoundingClientRect();
      this.body.appendChild(this.menu);
      this.menu.style.position = "fixed";
      if (this.direction === "right") {
        this.menu.style.right = `${this.rect.right - this.rect.width}px`;
      } else {
        this.menu.style.left = `${this.rect.left}px`;
      }
      this.menu.style.top = `${this.rect.top}px`;
      this.menu.style.width = `${this.rect.width}px`;
    }
    this.menu.addEventListener("mouseleave", this.hide.bind(this));
    window.addEventListener("click", (event2) => {
      if (!this.menu.contains(event2.target)) {
        this.hide();
      }
    });
    const input = this.menu.querySelector("input");
    if (input !== null)
      input.focus();
    this.showing = true;
    const showEvent = new Event("show");
    this.container.dispatchEvent(showEvent);
    if (event) {
      event.stopPropagation();
    }
  }
  hideAll() {
    for (let dropdown of window.components.dropdown) {
      dropdown.hide();
    }
  }
  hide() {
    this.menu.style.display = "none";
    this.menu.classList.remove("anim", "menuIn");
    this.toggle.setAttribute("aria-expanded", "false");
    if (this.moveMenu) {
      this.menu.style.position = "";
      this.menu.style[this.direction] = "";
      this.menu.style.top = "";
      this.menu.style.width = "";
      this.container.appendChild(this.menu);
    }
    this.showing = false;
  }
  getFocusable() {
    return Array.from(this.menu.querySelectorAll("[tabindex],[href],button,input:not([type=hidden])"));
  }
  focusNext() {
    const focusable = this.getFocusable();
    const currentIndex = focusable.indexOf(document.activeElement);
    let newIndex2 = currentIndex + 1;
    if (newIndex2 >= focusable.length) {
      newIndex2 = 0;
    }
    focusable[newIndex2].focus();
  }
  focusPrevious() {
    const focusable = this.getFocusable();
    const currentIndex = focusable.indexOf(document.activeElement);
    let newIndex2 = currentIndex - 1;
    if (newIndex2 < 0) {
      newIndex2 = focusable.length - 1;
    }
    focusable[newIndex2].focus();
  }
  setupListeners() {
    this.container.addEventListener("click", (event) => {
      const possibleChildren = Array.from(this.menu.querySelectorAll("a"));
      if (possibleChildren.includes(event.target)) {
        this.hide();
      }
    });
    onSelect(this.toggle, (event) => {
      event.stopPropagation();
      this.show(event);
      if (event instanceof KeyboardEvent) {
        this.focusNext();
      }
    });
    const keyboardNavigation = (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        this.focusNext();
        event.preventDefault();
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        this.focusPrevious();
        event.preventDefault();
      } else if (event.key === "Escape") {
        this.hide();
        this.toggle.focus();
        if (!this.bubbleEscapes) {
          event.stopPropagation();
        }
      }
    };
    this.container.addEventListener("keydown", keyboardNavigation);
    if (this.moveMenu) {
      this.menu.addEventListener("keydown", keyboardNavigation);
    }
    this.menu.addEventListener("keydown ", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
      }
    });
  }
};
var dropdown_default = DropDown;

// resources/js/components/dropdown-search.js
var DropdownSearch = class {
  setup() {
    this.elem = this.$el;
    this.searchInput = this.$refs.searchInput;
    this.loadingElem = this.$refs.loading;
    this.listContainerElem = this.$refs.listContainer;
    this.localSearchSelector = this.$opts.localSearchSelector;
    this.url = this.$opts.url;
    this.elem.addEventListener("show", this.onShow.bind(this));
    this.searchInput.addEventListener("input", this.onSearch.bind(this));
    this.runAjaxSearch = debounce(this.runAjaxSearch, 300, false);
  }
  onShow() {
    this.loadList();
  }
  onSearch() {
    const input = this.searchInput.value.toLowerCase().trim();
    if (this.localSearchSelector) {
      this.runLocalSearch(input);
    } else {
      this.toggleLoading(true);
      this.listContainerElem.innerHTML = "";
      this.runAjaxSearch(input);
    }
  }
  runAjaxSearch(searchTerm) {
    this.loadList(searchTerm);
  }
  runLocalSearch(searchTerm) {
    const listItems = this.listContainerElem.querySelectorAll(this.localSearchSelector);
    for (let listItem of listItems) {
      const match = !searchTerm || listItem.textContent.toLowerCase().includes(searchTerm);
      listItem.style.display = match ? "flex" : "none";
      listItem.classList.toggle("hidden", !match);
    }
  }
  async loadList(searchTerm = "") {
    this.listContainerElem.innerHTML = "";
    this.toggleLoading(true);
    try {
      const resp = await window.$http.get(this.getAjaxUrl(searchTerm));
      this.listContainerElem.innerHTML = resp.data;
    } catch (err) {
      console.error(err);
    }
    this.toggleLoading(false);
    if (this.localSearchSelector) {
      this.onSearch();
    }
  }
  getAjaxUrl(searchTerm = null) {
    if (!searchTerm) {
      return this.url;
    }
    const joiner = this.url.includes("?") ? "&" : "?";
    return `${this.url}${joiner}search=${encodeURIComponent(searchTerm)}`;
  }
  toggleLoading(show2 = false) {
    this.loadingElem.style.display = show2 ? "block" : "none";
  }
};
var dropdown_search_default = DropdownSearch;

// resources/js/components/dropzone.js
var import_dropzone = __toESM(require_dropzone());
var Dropzone = class {
  setup() {
    this.container = this.$el;
    this.url = this.$opts.url;
    this.successMessage = this.$opts.successMessage;
    this.removeMessage = this.$opts.removeMessage;
    this.uploadLimit = Number(this.$opts.uploadLimit);
    this.uploadLimitMessage = this.$opts.uploadLimitMessage;
    this.timeoutMessage = this.$opts.timeoutMessage;
    const _this = this;
    this.dz = new import_dropzone.default(this.container, {
      addRemoveLinks: true,
      dictRemoveFile: this.removeMessage,
      timeout: Number(window.uploadTimeout) || 6e4,
      maxFilesize: this.uploadLimit,
      url: this.url,
      withCredentials: true,
      init() {
        this.dz = this;
        this.dz.on("sending", _this.onSending.bind(_this));
        this.dz.on("success", _this.onSuccess.bind(_this));
        this.dz.on("error", _this.onError.bind(_this));
      }
    });
  }
  onSending(file, xhr, data) {
    const token = window.document.querySelector("meta[name=token]").getAttribute("content");
    data.append("_token", token);
    xhr.ontimeout = (e) => {
      this.dz.emit("complete", file);
      this.dz.emit("error", file, this.timeoutMessage);
    };
  }
  onSuccess(file, data) {
    this.$emit("success", { file, data });
    if (this.successMessage) {
      window.$events.emit("success", this.successMessage);
    }
    fadeOut(file.previewElement, 800, () => {
      this.dz.removeFile(file);
    });
  }
  onError(file, errorMessage, xhr) {
    this.$emit("error", { file, errorMessage, xhr });
    const setMessage = (message) => {
      const messsageEl = file.previewElement.querySelector("[data-dz-errormessage]");
      messsageEl.textContent = message;
    };
    if (xhr && xhr.status === 413) {
      setMessage(this.uploadLimitMessage);
    } else if (errorMessage.file) {
      setMessage(errorMessage.file);
    }
  }
  removeAll() {
    this.dz.removeAllFiles(true);
  }
};
var dropzone_default = Dropzone;

// resources/js/components/editor-toolbox.js
var EditorToolbox = class {
  constructor(elem) {
    this.elem = elem;
    this.buttons = elem.querySelectorAll("[toolbox-tab-button]");
    this.contentElements = elem.querySelectorAll("[toolbox-tab-content]");
    this.toggleButton = elem.querySelector("[toolbox-toggle]");
    this.toggleButton.addEventListener("click", this.toggle.bind(this));
    this.elem.addEventListener("click", (event) => {
      let button = event.target.closest("[toolbox-tab-button]");
      if (button === null)
        return;
      let name = button.getAttribute("toolbox-tab-button");
      this.setActiveTab(name, true);
    });
    this.setActiveTab(this.contentElements[0].getAttribute("toolbox-tab-content"));
  }
  toggle() {
    this.elem.classList.toggle("open");
    const expanded = this.elem.classList.contains("open") ? "true" : "false";
    this.toggleButton.setAttribute("aria-expanded", expanded);
  }
  setActiveTab(tabName, openToolbox = false) {
    for (let i = 0, len = this.buttons.length; i < len; i++) {
      this.buttons[i].classList.remove("active");
      let bName = this.buttons[i].getAttribute("toolbox-tab-button");
      if (bName === tabName)
        this.buttons[i].classList.add("active");
    }
    for (let i = 0, len = this.contentElements.length; i < len; i++) {
      this.contentElements[i].style.display = "none";
      let cName = this.contentElements[i].getAttribute("toolbox-tab-content");
      if (cName === tabName)
        this.contentElements[i].style.display = "block";
    }
    if (openToolbox && !this.elem.classList.contains("open")) {
      this.toggle();
    }
  }
};
var editor_toolbox_default = EditorToolbox;

// resources/js/components/entity-permissions-editor.js
var EntityPermissionsEditor = class {
  constructor(elem) {
    this.permissionsTable = elem.querySelector("[permissions-table]");
    this.restrictedCheckbox = elem.querySelector("[name=restricted]");
    this.restrictedCheckbox.addEventListener("change", this.updateTableVisibility.bind(this));
  }
  updateTableVisibility() {
    this.permissionsTable.style.display = this.restrictedCheckbox.checked ? null : "none";
  }
};
var entity_permissions_editor_default = EntityPermissionsEditor;

// resources/js/components/entity-search.js
var EntitySearch = class {
  setup() {
    this.entityId = this.$opts.entityId;
    this.entityType = this.$opts.entityType;
    this.contentView = this.$refs.contentView;
    this.searchView = this.$refs.searchView;
    this.searchResults = this.$refs.searchResults;
    this.searchInput = this.$refs.searchInput;
    this.searchForm = this.$refs.searchForm;
    this.clearButton = this.$refs.clearButton;
    this.loadingBlock = this.$refs.loadingBlock;
    this.setupListeners();
  }
  setupListeners() {
    this.searchInput.addEventListener("change", this.runSearch.bind(this));
    this.searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.runSearch();
    });
    onSelect(this.clearButton, this.clearSearch.bind(this));
  }
  runSearch() {
    const term = this.searchInput.value.trim();
    if (term.length === 0) {
      return this.clearSearch();
    }
    this.searchView.classList.remove("hidden");
    this.contentView.classList.add("hidden");
    this.loadingBlock.classList.remove("hidden");
    const url = window.baseUrl(`/search/${this.entityType}/${this.entityId}`);
    window.$http.get(url, { term }).then((resp) => {
      this.searchResults.innerHTML = resp.data;
    }).catch(console.error).then(() => {
      this.loadingBlock.classList.add("hidden");
    });
  }
  clearSearch() {
    this.searchView.classList.add("hidden");
    this.contentView.classList.remove("hidden");
    this.loadingBlock.classList.add("hidden");
    this.searchInput.value = "";
  }
};
var entity_search_default = EntitySearch;

// resources/js/components/entity-selector.js
var EntitySelector = class {
  setup() {
    this.elem = this.$el;
    this.entityTypes = this.$opts.entityTypes || "page,book,chapter";
    this.entityPermission = this.$opts.entityPermission || "view";
    this.input = this.$refs.input;
    this.searchInput = this.$refs.search;
    this.loading = this.$refs.loading;
    this.resultsContainer = this.$refs.results;
    this.addButton = this.$refs.add;
    this.search = "";
    this.lastClick = 0;
    this.selectedItemData = null;
    this.setupListeners();
    this.showLoading();
    this.initialLoad();
  }
  setupListeners() {
    this.elem.addEventListener("click", this.onClick.bind(this));
    let lastSearch = 0;
    this.searchInput.addEventListener("input", (event) => {
      lastSearch = Date.now();
      this.showLoading();
      setTimeout(() => {
        if (Date.now() - lastSearch < 199)
          return;
        this.searchEntities(this.searchInput.value);
      }, 200);
    });
    this.searchInput.addEventListener("keydown", (event) => {
      if (event.keyCode === 13)
        event.preventDefault();
    });
    if (this.addButton) {
      this.addButton.addEventListener("click", (event) => {
        if (this.selectedItemData) {
          this.confirmSelection(this.selectedItemData);
          this.unselectAll();
        }
      });
    }
    onChildEvent(this.$el, "[data-entity-type]", "keydown", (e, el) => {
      if (e.ctrlKey && e.code === "Enter") {
        const form = this.$el.closest("form");
        if (form) {
          form.submit();
          e.preventDefault();
          return;
        }
      }
      if (e.code === "ArrowDown") {
        this.focusAdjacent(true);
      }
      if (e.code === "ArrowUp") {
        this.focusAdjacent(false);
      }
    });
    this.searchInput.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown") {
        this.focusAdjacent(true);
      }
    });
  }
  focusAdjacent(forward = true) {
    const items = Array.from(this.resultsContainer.querySelectorAll("[data-entity-type]"));
    const selectedIndex = items.indexOf(document.activeElement);
    const newItem = items[selectedIndex + (forward ? 1 : -1)] || items[0];
    if (newItem) {
      newItem.focus();
    }
  }
  showLoading() {
    this.loading.style.display = "block";
    this.resultsContainer.style.display = "none";
  }
  hideLoading() {
    this.loading.style.display = "none";
    this.resultsContainer.style.display = "block";
  }
  initialLoad() {
    window.$http.get(this.searchUrl()).then((resp) => {
      this.resultsContainer.innerHTML = resp.data;
      this.hideLoading();
    });
  }
  searchUrl() {
    return `/ajax/search/entities?types=${encodeURIComponent(this.entityTypes)}&permission=${encodeURIComponent(this.entityPermission)}`;
  }
  searchEntities(searchTerm) {
    this.input.value = "";
    const url = `${this.searchUrl()}&term=${encodeURIComponent(searchTerm)}`;
    window.$http.get(url).then((resp) => {
      this.resultsContainer.innerHTML = resp.data;
      this.hideLoading();
    });
  }
  isDoubleClick() {
    const now = Date.now();
    const answer = now - this.lastClick < 300;
    this.lastClick = now;
    return answer;
  }
  onClick(event) {
    const listItem = event.target.closest("[data-entity-type]");
    if (listItem) {
      event.preventDefault();
      event.stopPropagation();
      this.selectItem(listItem);
    }
  }
  selectItem(item) {
    const isDblClick = this.isDoubleClick();
    const type = item.getAttribute("data-entity-type");
    const id = item.getAttribute("data-entity-id");
    const isSelected = !item.classList.contains("selected") || isDblClick;
    this.unselectAll();
    this.input.value = isSelected ? `${type}:${id}` : "";
    const link = item.getAttribute("href");
    const name = item.querySelector(".entity-list-item-name").textContent;
    const data = { id: Number(id), name, link };
    if (isSelected) {
      item.classList.add("selected");
      this.selectedItemData = data;
    } else {
      window.$events.emit("entity-select-change", null);
    }
    if (!isDblClick && !isSelected)
      return;
    if (isDblClick) {
      this.confirmSelection(data);
    }
    if (isSelected) {
      window.$events.emit("entity-select-change", data);
    }
  }
  confirmSelection(data) {
    window.$events.emit("entity-select-confirm", data);
  }
  unselectAll() {
    const selected = this.elem.querySelectorAll(".selected");
    for (const selectedElem of selected) {
      selectedElem.classList.remove("selected", "primary-background");
    }
    this.selectedItemData = null;
  }
};
var entity_selector_default = EntitySelector;

// resources/js/components/entity-selector-popup.js
var EntitySelectorPopup = class {
  setup() {
    this.elem = this.$el;
    this.selectButton = this.$refs.select;
    this.searchInput = this.$refs.searchInput;
    window.EntitySelectorPopup = this;
    this.callback = null;
    this.selection = null;
    this.selectButton.addEventListener("click", this.onSelectButtonClick.bind(this));
    window.$events.listen("entity-select-change", this.onSelectionChange.bind(this));
    window.$events.listen("entity-select-confirm", this.onSelectionConfirm.bind(this));
  }
  show(callback) {
    this.callback = callback;
    this.elem.components.popup.show();
    this.searchInput.focus();
  }
  hide() {
    this.elem.components.popup.hide();
  }
  onSelectButtonClick() {
    this.hide();
    if (this.selection !== null && this.callback)
      this.callback(this.selection);
  }
  onSelectionConfirm(entity) {
    this.hide();
    if (this.callback && entity)
      this.callback(entity);
  }
  onSelectionChange(entity) {
    this.selection = entity;
    if (entity === null) {
      this.selectButton.setAttribute("disabled", "true");
    } else {
      this.selectButton.removeAttribute("disabled");
    }
  }
};
var entity_selector_popup_default = EntitySelectorPopup;

// resources/js/components/event-emit-select.js
var EventEmitSelect = class {
  setup() {
    this.container = this.$el;
    this.name = this.$opts.name;
    onSelect(this.$el, () => {
      this.$emit(this.name, this.$opts);
    });
  }
};
var event_emit_select_default = EventEmitSelect;

// resources/js/components/expand-toggle.js
var ExpandToggle = class {
  constructor(elem) {
    this.elem = elem;
    this.isOpen = elem.getAttribute("expand-toggle-is-open") === "yes";
    this.updateEndpoint = elem.getAttribute("expand-toggle-update-endpoint");
    this.selector = elem.getAttribute("expand-toggle");
    elem.addEventListener("click", this.click.bind(this));
  }
  open(elemToToggle) {
    slideDown(elemToToggle, 200);
  }
  close(elemToToggle) {
    slideUp(elemToToggle, 200);
  }
  click(event) {
    event.preventDefault();
    const matchingElems = document.querySelectorAll(this.selector);
    for (let match of matchingElems) {
      this.isOpen ? this.close(match) : this.open(match);
    }
    this.isOpen = !this.isOpen;
    this.updateSystemAjax(this.isOpen);
  }
  updateSystemAjax(isOpen) {
    window.$http.patch(this.updateEndpoint, {
      expand: isOpen ? "true" : "false"
    });
  }
};
var expand_toggle_default = ExpandToggle;

// resources/js/components/header-mobile-toggle.js
var HeaderMobileToggle = class {
  setup() {
    this.elem = this.$el;
    this.toggleButton = this.$refs.toggle;
    this.menu = this.$refs.menu;
    this.open = false;
    this.toggleButton.addEventListener("click", this.onToggle.bind(this));
    this.onWindowClick = this.onWindowClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  onToggle(event) {
    this.open = !this.open;
    this.menu.classList.toggle("show", this.open);
    this.toggleButton.setAttribute("aria-expanded", this.open ? "true" : "false");
    if (this.open) {
      this.elem.addEventListener("keydown", this.onKeyDown);
      window.addEventListener("click", this.onWindowClick);
    } else {
      this.elem.removeEventListener("keydown", this.onKeyDown);
      window.removeEventListener("click", this.onWindowClick);
    }
    event.stopPropagation();
  }
  onKeyDown(event) {
    if (event.code === "Escape") {
      this.onToggle(event);
    }
  }
  onWindowClick(event) {
    this.onToggle(event);
  }
};
var header_mobile_toggle_default = HeaderMobileToggle;

// resources/js/components/homepage-control.js
var HomepageControl = class {
  constructor(elem) {
    this.elem = elem;
    this.typeControl = elem.querySelector('[name="setting-app-homepage-type"]');
    this.pagePickerContainer = elem.querySelector("[page-picker-container]");
    this.typeControl.addEventListener("change", this.controlPagePickerVisibility.bind(this));
    this.controlPagePickerVisibility();
  }
  controlPagePickerVisibility() {
    const showPagePicker = this.typeControl.value === "page";
    this.pagePickerContainer.style.display = showPagePicker ? "block" : "none";
  }
};
var homepage_control_default = HomepageControl;

// resources/js/components/image-manager.js
var ImageManager = class {
  setup() {
    this.uploadedTo = this.$opts.uploadedTo;
    this.container = this.$el;
    this.popupEl = this.$refs.popup;
    this.searchForm = this.$refs.searchForm;
    this.searchInput = this.$refs.searchInput;
    this.cancelSearch = this.$refs.cancelSearch;
    this.listContainer = this.$refs.listContainer;
    this.filterTabs = this.$manyRefs.filterTabs;
    this.selectButton = this.$refs.selectButton;
    this.formContainer = this.$refs.formContainer;
    this.dropzoneContainer = this.$refs.dropzoneContainer;
    this.type = "gallery";
    this.lastSelected = {};
    this.lastSelectedTime = 0;
    this.callback = null;
    this.resetState = () => {
      this.hasData = false;
      this.page = 1;
      this.filter = "all";
    };
    this.resetState();
    this.setupListeners();
    window.ImageManager = this;
  }
  setupListeners() {
    onSelect(this.filterTabs, (e) => {
      this.resetAll();
      this.filter = e.target.dataset.filter;
      this.setActiveFilterTab(this.filter);
      this.loadGallery();
    });
    this.searchForm.addEventListener("submit", (event) => {
      this.resetListView();
      this.loadGallery();
      event.preventDefault();
    });
    onSelect(this.cancelSearch, (event) => {
      this.resetListView();
      this.resetSearchView();
      this.loadGallery();
      this.cancelSearch.classList.remove("active");
    });
    this.searchInput.addEventListener("input", (event) => {
      this.cancelSearch.classList.toggle("active", this.searchInput.value.trim());
    });
    onChildEvent(this.listContainer, ".load-more", "click", async (event) => {
      showLoading(event.target);
      this.page++;
      await this.loadGallery();
      event.target.remove();
    });
    this.listContainer.addEventListener("event-emit-select-image", this.onImageSelectEvent.bind(this));
    this.listContainer.addEventListener("error", (event) => {
      event.target.src = baseUrl("loading_error.png");
    }, true);
    onSelect(this.selectButton, () => {
      if (this.callback) {
        this.callback(this.lastSelected);
      }
      this.hide();
    });
    onChildEvent(this.formContainer, "#image-manager-delete", "click", (event) => {
      if (this.lastSelected) {
        this.loadImageEditForm(this.lastSelected.id, true);
      }
    });
    this.formContainer.addEventListener("ajax-form-success", this.refreshGallery.bind(this));
    this.container.addEventListener("dropzone-success", this.refreshGallery.bind(this));
  }
  show(callback, type = "gallery") {
    this.resetAll();
    this.callback = callback;
    this.type = type;
    this.popupEl.components.popup.show();
    this.dropzoneContainer.classList.toggle("hidden", type !== "gallery");
    if (!this.hasData) {
      this.loadGallery();
      this.hasData = true;
    }
  }
  hide() {
    this.popupEl.components.popup.hide();
  }
  async loadGallery() {
    const params = {
      page: this.page,
      search: this.searchInput.value || null,
      uploaded_to: this.uploadedTo,
      filter_type: this.filter === "all" ? null : this.filter
    };
    const { data: html } = await window.$http.get(`images/${this.type}`, params);
    if (params.page === 1) {
      this.listContainer.innerHTML = "";
    }
    this.addReturnedHtmlElementsToList(html);
    removeLoading(this.listContainer);
  }
  addReturnedHtmlElementsToList(html) {
    const el = document.createElement("div");
    el.innerHTML = html;
    window.components.init(el);
    for (const child of [...el.children]) {
      this.listContainer.appendChild(child);
    }
  }
  setActiveFilterTab(filterName) {
    this.filterTabs.forEach((t) => t.classList.remove("selected"));
    const activeTab = this.filterTabs.find((t) => t.dataset.filter === filterName);
    if (activeTab) {
      activeTab.classList.add("selected");
    }
  }
  resetAll() {
    this.resetState();
    this.resetListView();
    this.resetSearchView();
    this.resetEditForm();
    this.setActiveFilterTab("all");
    this.selectButton.classList.add("hidden");
  }
  resetSearchView() {
    this.searchInput.value = "";
  }
  resetEditForm() {
    this.formContainer.innerHTML = "";
  }
  resetListView() {
    showLoading(this.listContainer);
    this.page = 1;
  }
  refreshGallery() {
    this.resetListView();
    this.loadGallery();
  }
  onImageSelectEvent(event) {
    const image = JSON.parse(event.detail.data);
    const isDblClick = image && image.id === this.lastSelected.id && Date.now() - this.lastSelectedTime < 400;
    const alreadySelected = event.target.classList.contains("selected");
    [...this.listContainer.querySelectorAll(".selected")].forEach((el) => {
      el.classList.remove("selected");
    });
    if (!alreadySelected) {
      event.target.classList.add("selected");
      this.loadImageEditForm(image.id);
    } else {
      this.resetEditForm();
    }
    this.selectButton.classList.toggle("hidden", alreadySelected);
    if (isDblClick && this.callback) {
      this.callback(image);
      this.hide();
    }
    this.lastSelected = image;
    this.lastSelectedTime = Date.now();
  }
  async loadImageEditForm(imageId, requestDelete = false) {
    if (!requestDelete) {
      this.formContainer.innerHTML = "";
    }
    const params = requestDelete ? { delete: true } : {};
    const { data: formHtml } = await window.$http.get(`/images/edit/${imageId}`, params);
    this.formContainer.innerHTML = formHtml;
    window.components.init(this.formContainer);
  }
};
var image_manager_default = ImageManager;

// resources/js/components/image-picker.js
var ImagePicker = class {
  constructor(elem) {
    this.elem = elem;
    this.imageElem = elem.querySelector("img");
    this.imageInput = elem.querySelector("input[type=file]");
    this.resetInput = elem.querySelector("input[data-reset-input]");
    this.removeInput = elem.querySelector("input[data-remove-input]");
    this.defaultImage = elem.getAttribute("data-default-image");
    const resetButton = elem.querySelector('button[data-action="reset-image"]');
    resetButton.addEventListener("click", this.reset.bind(this));
    const removeButton = elem.querySelector('button[data-action="remove-image"]');
    if (removeButton) {
      removeButton.addEventListener("click", this.removeImage.bind(this));
    }
    this.imageInput.addEventListener("change", this.fileInputChange.bind(this));
  }
  fileInputChange() {
    this.resetInput.setAttribute("disabled", "disabled");
    if (this.removeInput) {
      this.removeInput.setAttribute("disabled", "disabled");
    }
    for (let file of this.imageInput.files) {
      this.imageElem.src = window.URL.createObjectURL(file);
    }
    this.imageElem.classList.remove("none");
  }
  reset() {
    this.imageInput.value = "";
    this.imageElem.src = this.defaultImage;
    this.resetInput.removeAttribute("disabled");
    if (this.removeInput) {
      this.removeInput.setAttribute("disabled", "disabled");
    }
    this.imageElem.classList.remove("none");
  }
  removeImage() {
    this.imageInput.value = "";
    this.imageElem.classList.add("none");
    this.removeInput.removeAttribute("disabled");
    this.resetInput.setAttribute("disabled", "disabled");
  }
};
var image_picker_default = ImagePicker;

// resources/js/components/list-sort-control.js
var ListSortControl = class {
  constructor(elem) {
    this.elem = elem;
    this.menu = elem.querySelector("ul");
    this.sortInput = elem.querySelector('[name="sort"]');
    this.orderInput = elem.querySelector('[name="order"]');
    this.form = elem.querySelector("form");
    this.menu.addEventListener("click", (event) => {
      if (event.target.closest("[data-sort-value]") !== null) {
        this.sortOptionClick(event);
      }
    });
    this.elem.addEventListener("click", (event) => {
      if (event.target.closest("[data-sort-dir]") !== null) {
        this.sortDirectionClick(event);
      }
    });
  }
  sortOptionClick(event) {
    const sortOption = event.target.closest("[data-sort-value]");
    this.sortInput.value = sortOption.getAttribute("data-sort-value");
    event.preventDefault();
    this.form.submit();
  }
  sortDirectionClick(event) {
    const currentDir = this.orderInput.value;
    const newDir = currentDir === "asc" ? "desc" : "asc";
    this.orderInput.value = newDir;
    event.preventDefault();
    this.form.submit();
  }
};
var list_sort_control_default = ListSortControl;

// resources/js/components/markdown-editor.js
var import_markdown_it = __toESM(require_markdown_it());
var import_markdown_it_task_lists = __toESM(require_markdown_it_task_lists());

// resources/js/services/clipboard.js
var Clipboard = class {
  constructor(clipboardData) {
    this.data = clipboardData;
  }
  hasItems() {
    return Boolean(this.data) && Boolean(this.data.types) && this.data.types.length > 0;
  }
  containsTabularData() {
    const rtfData = this.data.getData("text/rtf");
    return rtfData && rtfData.includes("\\trowd");
  }
  getImages() {
    const types = this.data.types;
    const files = this.data.files;
    const images = [];
    for (const type of types) {
      if (type.includes("image")) {
        const item = this.data.getData(type);
        images.push(item.getAsFile());
      }
    }
    for (const file of files) {
      if (file.type.includes("image")) {
        images.push(file);
      }
    }
    return images;
  }
};
var clipboard_default = Clipboard;

// resources/js/services/drawio.js
var iFrame = null;
var lastApprovedOrigin;
var onInit;
var onSave;
function show(drawioUrl, onInitCallback, onSaveCallback) {
  onInit = onInitCallback;
  onSave = onSaveCallback;
  iFrame = document.createElement("iframe");
  iFrame.setAttribute("frameborder", "0");
  window.addEventListener("message", drawReceive);
  iFrame.setAttribute("src", drawioUrl);
  iFrame.setAttribute("class", "fullscreen");
  iFrame.style.backgroundColor = "#FFFFFF";
  document.body.appendChild(iFrame);
  lastApprovedOrigin = new URL(drawioUrl).origin;
}
function close() {
  drawEventClose();
}
function drawReceive(event) {
  if (!event.data || event.data.length < 1)
    return;
  if (event.origin !== lastApprovedOrigin)
    return;
  const message = JSON.parse(event.data);
  if (message.event === "init") {
    drawEventInit();
  } else if (message.event === "exit") {
    drawEventClose();
  } else if (message.event === "save") {
    drawEventSave(message);
  } else if (message.event === "export") {
    drawEventExport(message);
  }
}
function drawEventExport(message) {
  if (onSave) {
    onSave(message.data);
  }
}
function drawEventSave(message) {
  drawPostMessage({ action: "export", format: "xmlpng", xml: message.xml, spin: "Updating drawing" });
}
function drawEventInit() {
  if (!onInit)
    return;
  onInit().then((xml) => {
    drawPostMessage({ action: "load", autosave: 1, xml });
  });
}
function drawEventClose() {
  window.removeEventListener("message", drawReceive);
  if (iFrame)
    document.body.removeChild(iFrame);
}
function drawPostMessage(data) {
  iFrame.contentWindow.postMessage(JSON.stringify(data), lastApprovedOrigin);
}
async function upload(imageData, pageUploadedToId) {
  let data = {
    image: imageData,
    uploaded_to: pageUploadedToId
  };
  const resp = await window.$http.post(window.baseUrl(`/images/drawio`), data);
  return resp.data;
}
async function load(drawingId) {
  const resp = await window.$http.get(window.baseUrl(`/images/drawio/base64/${drawingId}`));
  return `data:image/png;base64,${resp.data.content}`;
}
var drawio_default = { show, close, upload, load };

// resources/js/components/markdown-editor.js
var MarkdownEditor = class {
  setup() {
    this.elem = this.$el;
    this.pageId = this.$opts.pageId;
    this.textDirection = this.$opts.textDirection;
    this.imageUploadErrorText = this.$opts.imageUploadErrorText;
    this.serverUploadLimitText = this.$opts.serverUploadLimitText;
    this.markdown = new import_markdown_it.default({ html: true });
    this.markdown.use(import_markdown_it_task_lists.default, { label: true });
    this.display = this.elem.querySelector(".markdown-display");
    this.displayStylesLoaded = false;
    this.input = this.elem.querySelector("textarea");
    this.cm = null;
    this.Code = null;
    const cmLoadPromise = window.importVersioned("code").then((Code) => {
      this.cm = Code.markdownEditor(this.input);
      this.Code = Code;
      return this.cm;
    });
    this.onMarkdownScroll = this.onMarkdownScroll.bind(this);
    const displayLoad = () => {
      this.displayDoc = this.display.contentDocument;
      this.init(cmLoadPromise);
    };
    if (this.display.contentDocument.readyState === "complete") {
      displayLoad();
    } else {
      this.display.addEventListener("load", displayLoad.bind(this));
    }
    window.$events.emitPublic(this.elem, "editor-markdown::setup", {
      markdownIt: this.markdown,
      displayEl: this.display,
      codeMirrorInstance: this.cm
    });
  }
  init(cmLoadPromise) {
    let lastClick = 0;
    this.displayDoc.addEventListener("click", (event) => {
      let isDblClick = Date.now() - lastClick < 300;
      let link = event.target.closest("a");
      if (link !== null) {
        event.preventDefault();
        window.open(link.getAttribute("href"));
        return;
      }
      let drawing = event.target.closest("[drawio-diagram]");
      if (drawing !== null && isDblClick) {
        this.actionEditDrawing(drawing);
        return;
      }
      lastClick = Date.now();
    });
    this.elem.addEventListener("click", (event) => {
      let button = event.target.closest("button[data-action]");
      if (button === null)
        return;
      let action = button.getAttribute("data-action");
      if (action === "insertImage")
        this.actionInsertImage();
      if (action === "insertLink")
        this.actionShowLinkSelector();
      if (action === "insertDrawing" && (event.ctrlKey || event.metaKey)) {
        this.actionShowImageManager();
        return;
      }
      if (action === "insertDrawing")
        this.actionStartDrawing();
      if (action === "fullscreen")
        this.actionFullScreen();
    });
    this.elem.addEventListener("click", (event) => {
      const toolbarLabel = event.target.closest(".editor-toolbar-label");
      if (!toolbarLabel)
        return;
      const currentActiveSections = this.elem.querySelectorAll(".markdown-editor-wrap");
      for (let activeElem of currentActiveSections) {
        activeElem.classList.remove("active");
      }
      toolbarLabel.closest(".markdown-editor-wrap").classList.add("active");
    });
    cmLoadPromise.then((cm) => {
      this.codeMirrorSetup(cm);
      const resizeDebounced = debounce(() => this.Code.updateLayout(cm), 100, false);
      const observer = new ResizeObserver(resizeDebounced);
      observer.observe(this.elem);
    });
    this.listenForBookStackEditorEvents();
    const queryParams = new URL(window.location).searchParams;
    const scrollText = queryParams.get("content-text");
    if (scrollText) {
      this.scrollToText(scrollText);
    }
  }
  updateAndRender() {
    const content = this.cm.getValue();
    this.input.value = content;
    const html = this.markdown.render(content);
    window.$events.emit("editor-html-change", html);
    window.$events.emit("editor-markdown-change", content);
    this.displayDoc.body.className = "page-content";
    this.displayDoc.body.innerHTML = html;
    this.loadStylesIntoDisplay();
  }
  loadStylesIntoDisplay() {
    if (this.displayStylesLoaded)
      return;
    this.displayDoc.documentElement.classList.add("markdown-editor-display");
    if (document.documentElement.classList.contains("dark-mode")) {
      this.displayDoc.documentElement.style.backgroundColor = "#222";
      this.displayDoc.documentElement.classList.add("dark-mode");
    }
    this.displayDoc.head.innerHTML = "";
    const styles = document.head.querySelectorAll("style,link[rel=stylesheet]");
    for (let style of styles) {
      const copy = style.cloneNode(true);
      this.displayDoc.head.appendChild(copy);
    }
    this.displayStylesLoaded = true;
  }
  onMarkdownScroll(lineCount) {
    const elems = this.displayDoc.body.children;
    if (elems.length <= lineCount)
      return;
    const topElem = lineCount === -1 ? elems[elems.length - 1] : elems[lineCount];
    topElem.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
  }
  codeMirrorSetup(cm) {
    const context = this;
    cm.setOption("direction", "ltr");
    let metaKey = this.Code.getMetaKey();
    const extraKeys = {};
    extraKeys[`${metaKey}-Alt-I`] = function(cm2) {
      let selectedText = cm2.getSelection();
      let newText = `![${selectedText}](http://)`;
      let cursorPos = cm2.getCursor("from");
      cm2.replaceSelection(newText);
      cm2.setCursor(cursorPos.line, cursorPos.ch + newText.length - 1);
    };
    extraKeys[`${metaKey}-S`] = (cm2) => {
      window.$events.emit("editor-save-draft");
    };
    extraKeys[`${metaKey}-Enter`] = (cm2) => {
      window.$events.emit("editor-save-page");
    };
    extraKeys[`Shift-${metaKey}-K`] = (cm2) => {
      this.actionShowLinkSelector();
    };
    extraKeys[`${metaKey}-K`] = (cm2) => {
      insertLink();
    };
    extraKeys[`${metaKey}-1`] = (cm2) => {
      replaceLineStart("##");
    };
    extraKeys[`${metaKey}-2`] = (cm2) => {
      replaceLineStart("###");
    };
    extraKeys[`${metaKey}-3`] = (cm2) => {
      replaceLineStart("####");
    };
    extraKeys[`${metaKey}-4`] = (cm2) => {
      replaceLineStart("#####");
    };
    extraKeys[`${metaKey}-5`] = (cm2) => {
      replaceLineStart("");
    };
    extraKeys[`${metaKey}-d`] = (cm2) => {
      replaceLineStart("");
    };
    extraKeys[`${metaKey}-6`] = (cm2) => {
      replaceLineStart(">");
    };
    extraKeys[`${metaKey}-q`] = (cm2) => {
      replaceLineStart(">");
    };
    extraKeys[`${metaKey}-7`] = (cm2) => {
      wrapSelection("\n```\n", "\n```");
    };
    extraKeys[`${metaKey}-8`] = (cm2) => {
      wrapSelection("`", "`");
    };
    extraKeys[`Shift-${metaKey}-E`] = (cm2) => {
      wrapSelection("`", "`");
    };
    extraKeys[`${metaKey}-9`] = (cm2) => {
      wrapSelection('<p class="callout info">', "</p>");
    };
    cm.setOption("extraKeys", extraKeys);
    cm.on("change", (instance, changeObj) => {
      this.updateAndRender();
    });
    const onScrollDebounced = debounce((instance) => {
      let scroll = instance.getScrollInfo();
      let atEnd = scroll.top + scroll.clientHeight === scroll.height;
      if (atEnd) {
        this.onMarkdownScroll(-1);
        return;
      }
      let lineNum = instance.lineAtHeight(scroll.top, "local");
      let range = instance.getRange({ line: 0, ch: null }, { line: lineNum, ch: null });
      let parser = new DOMParser();
      let doc = parser.parseFromString(this.markdown.render(range), "text/html");
      let totalLines = doc.documentElement.querySelectorAll("body > *");
      this.onMarkdownScroll(totalLines.length);
    }, 100);
    cm.on("scroll", (instance) => {
      onScrollDebounced(instance);
    });
    cm.on("paste", (cm2, event) => {
      const clipboard = new clipboard_default(event.clipboardData || event.dataTransfer);
      if (!clipboard.hasItems() || clipboard.containsTabularData()) {
        return;
      }
      const images = clipboard.getImages();
      for (const image of images) {
        uploadImage(image);
      }
    });
    cm.on("drop", (cm2, event) => {
      const templateId = event.dataTransfer.getData("bookstack/template");
      if (templateId) {
        const cursorPos = cm2.coordsChar({ left: event.pageX, top: event.pageY });
        cm2.setCursor(cursorPos);
        event.preventDefault();
        window.$http.get(`/templates/${templateId}`).then((resp) => {
          const content = resp.data.markdown || resp.data.html;
          cm2.replaceSelection(content);
        });
      }
      const clipboard = new clipboard_default(event.dataTransfer);
      if (clipboard.hasItems() && clipboard.getImages().length > 0) {
        const cursorPos = cm2.coordsChar({ left: event.pageX, top: event.pageY });
        cm2.setCursor(cursorPos);
        event.stopPropagation();
        event.preventDefault();
        const images = clipboard.getImages();
        for (const image of images) {
          uploadImage(image);
        }
      }
    });
    function replaceContent(search, replace) {
      let text = cm.getValue();
      let cursor = cm.listSelections();
      cm.setValue(text.replace(search, replace));
      cm.setSelections(cursor);
    }
    function replaceLineStart(newStart) {
      let cursor = cm.getCursor();
      let lineContent = cm.getLine(cursor.line);
      let lineLen = lineContent.length;
      let lineStart = lineContent.split(" ")[0];
      if (lineStart === newStart) {
        lineContent = lineContent.replace(`${newStart} `, "");
        cm.replaceRange(lineContent, { line: cursor.line, ch: 0 }, { line: cursor.line, ch: lineLen });
        cm.setCursor({ line: cursor.line, ch: cursor.ch - (newStart.length + 1) });
        return;
      }
      let alreadySymbol = /^[#>`]/.test(lineStart);
      let posDif = 0;
      if (alreadySymbol) {
        posDif = newStart.length - lineStart.length;
        lineContent = lineContent.replace(lineStart, newStart).trim();
      } else if (newStart !== "") {
        posDif = newStart.length + 1;
        lineContent = newStart + " " + lineContent;
      }
      cm.replaceRange(lineContent, { line: cursor.line, ch: 0 }, { line: cursor.line, ch: lineLen });
      cm.setCursor({ line: cursor.line, ch: cursor.ch + posDif });
    }
    function wrapLine(start, end) {
      let cursor = cm.getCursor();
      let lineContent = cm.getLine(cursor.line);
      let lineLen = lineContent.length;
      let newLineContent = lineContent;
      if (lineContent.indexOf(start) === 0 && lineContent.slice(-end.length) === end) {
        newLineContent = lineContent.slice(start.length, lineContent.length - end.length);
      } else {
        newLineContent = `${start}${lineContent}${end}`;
      }
      cm.replaceRange(newLineContent, { line: cursor.line, ch: 0 }, { line: cursor.line, ch: lineLen });
      cm.setCursor({ line: cursor.line, ch: cursor.ch + start.length });
    }
    function wrapSelection(start, end) {
      let selection = cm.getSelection();
      if (selection === "")
        return wrapLine(start, end);
      let newSelection = selection;
      let frontDiff = 0;
      let endDiff = 0;
      if (selection.indexOf(start) === 0 && selection.slice(-end.length) === end) {
        newSelection = selection.slice(start.length, selection.length - end.length);
        endDiff = -(end.length + start.length);
      } else {
        newSelection = `${start}${selection}${end}`;
        endDiff = start.length + end.length;
      }
      let selections = cm.listSelections()[0];
      cm.replaceSelection(newSelection);
      let headFirst = selections.head.ch <= selections.anchor.ch;
      selections.head.ch += headFirst ? frontDiff : endDiff;
      selections.anchor.ch += headFirst ? endDiff : frontDiff;
      cm.setSelections([selections]);
    }
    function uploadImage(file) {
      if (file === null || file.type.indexOf("image") !== 0)
        return;
      let ext = "png";
      if (file.name) {
        let fileNameMatches = file.name.match(/\.(.+)$/);
        if (fileNameMatches.length > 1)
          ext = fileNameMatches[1];
      }
      const id = "image-" + Math.random().toString(16).slice(2);
      const placeholderImage = window.baseUrl(`/loading.gif#upload${id}`);
      const selectedText = cm.getSelection();
      const placeHolderText = `![${selectedText}](${placeholderImage})`;
      const cursor = cm.getCursor();
      cm.replaceSelection(placeHolderText);
      cm.setCursor({ line: cursor.line, ch: cursor.ch + selectedText.length + 3 });
      const remoteFilename = "image-" + Date.now() + "." + ext;
      const formData = new FormData();
      formData.append("file", file, remoteFilename);
      formData.append("uploaded_to", context.pageId);
      window.$http.post("/images/gallery", formData).then((resp) => {
        const newContent = `[![${selectedText}](${resp.data.thumbs.display})](${resp.data.url})`;
        replaceContent(placeHolderText, newContent);
      }).catch((err) => {
        window.$events.emit("error", context.imageUploadErrorText);
        replaceContent(placeHolderText, selectedText);
        console.log(err);
      });
    }
    function insertLink() {
      let cursorPos = cm.getCursor("from");
      let selectedText = cm.getSelection() || "";
      let newText = `[${selectedText}]()`;
      cm.focus();
      cm.replaceSelection(newText);
      let cursorPosDiff = selectedText === "" ? -3 : -1;
      cm.setCursor(cursorPos.line, cursorPos.ch + newText.length + cursorPosDiff);
    }
    this.updateAndRender();
  }
  actionInsertImage() {
    const cursorPos = this.cm.getCursor("from");
    window.ImageManager.show((image) => {
      const imageUrl = image.thumbs.display || image.url;
      let selectedText = this.cm.getSelection();
      let newText = "[![" + (selectedText || image.name) + "](" + imageUrl + ")](" + image.url + ")";
      this.cm.focus();
      this.cm.replaceSelection(newText);
      this.cm.setCursor(cursorPos.line, cursorPos.ch + newText.length);
    }, "gallery");
  }
  actionShowImageManager() {
    const cursorPos = this.cm.getCursor("from");
    window.ImageManager.show((image) => {
      this.insertDrawing(image, cursorPos);
    }, "drawio");
  }
  actionShowLinkSelector() {
    const cursorPos = this.cm.getCursor("from");
    window.EntitySelectorPopup.show((entity) => {
      let selectedText = this.cm.getSelection() || entity.name;
      let newText = `[${selectedText}](${entity.link})`;
      this.cm.focus();
      this.cm.replaceSelection(newText);
      this.cm.setCursor(cursorPos.line, cursorPos.ch + newText.length);
    });
  }
  getDrawioUrl() {
    const drawioUrlElem = document.querySelector("[drawio-url]");
    return drawioUrlElem ? drawioUrlElem.getAttribute("drawio-url") : false;
  }
  actionStartDrawing() {
    const url = this.getDrawioUrl();
    if (!url)
      return;
    const cursorPos = this.cm.getCursor("from");
    drawio_default.show(url, () => {
      return Promise.resolve("");
    }, (pngData) => {
      const data = {
        image: pngData,
        uploaded_to: Number(this.pageId)
      };
      window.$http.post("/images/drawio", data).then((resp) => {
        this.insertDrawing(resp.data, cursorPos);
        drawio_default.close();
      }).catch((err) => {
        this.handleDrawingUploadError(err);
      });
    });
  }
  insertDrawing(image, originalCursor) {
    const newText = `<div drawio-diagram="${image.id}"><img src="${image.url}"></div>`;
    this.cm.focus();
    this.cm.replaceSelection(newText);
    this.cm.setCursor(originalCursor.line, originalCursor.ch + newText.length);
  }
  actionEditDrawing(imgContainer) {
    const drawioUrl = this.getDrawioUrl();
    if (!drawioUrl) {
      return;
    }
    const cursorPos = this.cm.getCursor("from");
    const drawingId = imgContainer.getAttribute("drawio-diagram");
    drawio_default.show(drawioUrl, () => {
      return drawio_default.load(drawingId);
    }, (pngData) => {
      let data = {
        image: pngData,
        uploaded_to: Number(this.pageId)
      };
      window.$http.post("/images/drawio", data).then((resp) => {
        let newText = `<div drawio-diagram="${resp.data.id}"><img src="${resp.data.url}"></div>`;
        let newContent = this.cm.getValue().split("\n").map((line) => {
          if (line.indexOf(`drawio-diagram="${drawingId}"`) !== -1) {
            return newText;
          }
          return line;
        }).join("\n");
        this.cm.setValue(newContent);
        this.cm.setCursor(cursorPos);
        this.cm.focus();
        drawio_default.close();
      }).catch((err) => {
        this.handleDrawingUploadError(err);
      });
    });
  }
  handleDrawingUploadError(error2) {
    if (error2.status === 413) {
      window.$events.emit("error", this.serverUploadLimitText);
    } else {
      window.$events.emit("error", this.imageUploadErrorText);
    }
    console.log(error2);
  }
  actionFullScreen() {
    const alreadyFullscreen = this.elem.classList.contains("fullscreen");
    this.elem.classList.toggle("fullscreen", !alreadyFullscreen);
    document.body.classList.toggle("markdown-fullscreen", !alreadyFullscreen);
  }
  scrollToText(searchText) {
    if (!searchText) {
      return;
    }
    const content = this.cm.getValue();
    const lines = content.split(/\r?\n/);
    let lineNumber = lines.findIndex((line) => {
      return line && line.indexOf(searchText) !== -1;
    });
    if (lineNumber === -1) {
      return;
    }
    this.cm.scrollIntoView({
      line: lineNumber
    }, 200);
    this.cm.focus();
    this.cm.setCursor({
      line: lineNumber,
      char: lines[lineNumber].length
    });
  }
  listenForBookStackEditorEvents() {
    function getContentToInsert({ html, markdown }) {
      return markdown || html;
    }
    window.$events.listen("editor::replace", (eventContent) => {
      const markdown = getContentToInsert(eventContent);
      this.cm.setValue(markdown);
    });
    window.$events.listen("editor::append", (eventContent) => {
      const cursorPos = this.cm.getCursor("from");
      const markdown = getContentToInsert(eventContent);
      const content = this.cm.getValue() + "\n" + markdown;
      this.cm.setValue(content);
      this.cm.setCursor(cursorPos.line, cursorPos.ch);
    });
    window.$events.listen("editor::prepend", (eventContent) => {
      const cursorPos = this.cm.getCursor("from");
      const markdown = getContentToInsert(eventContent);
      const content = markdown + "\n" + this.cm.getValue();
      this.cm.setValue(content);
      const prependLineCount = markdown.split("\n").length;
      this.cm.setCursor(cursorPos.line + prependLineCount, cursorPos.ch);
    });
    window.$events.listen("editor::insert", (eventContent) => {
      const markdown = getContentToInsert(eventContent);
      this.cm.replaceSelection(markdown);
    });
    window.$events.listen("editor::focus", () => {
      this.cm.focus();
    });
  }
};
var markdown_editor_default = MarkdownEditor;

// resources/js/components/new-user-password.js
var NewUserPassword = class {
  constructor(elem) {
    this.elem = elem;
    this.inviteOption = elem.querySelector("input[name=send_invite]");
    if (this.inviteOption) {
      this.inviteOption.addEventListener("change", this.inviteOptionChange.bind(this));
      this.inviteOptionChange();
    }
  }
  inviteOptionChange() {
    const inviting = this.inviteOption.value === "true";
    const passwordBoxes = this.elem.querySelectorAll("input[type=password]");
    for (const input of passwordBoxes) {
      input.disabled = inviting;
    }
    const container = this.elem.querySelector("#password-input-container");
    if (container) {
      container.style.display = inviting ? "none" : "block";
    }
  }
};
var new_user_password_default = NewUserPassword;

// resources/js/components/notification.js
var Notification = class {
  constructor(elem) {
    this.elem = elem;
    this.type = elem.getAttribute("notification");
    this.textElem = elem.querySelector("span");
    this.autohide = this.elem.hasAttribute("data-autohide");
    this.elem.style.display = "grid";
    window.$events.listen(this.type, (text) => {
      this.show(text);
    });
    elem.addEventListener("click", this.hide.bind(this));
    if (elem.hasAttribute("data-show")) {
      setTimeout(() => this.show(this.textElem.textContent), 100);
    }
    this.hideCleanup = this.hideCleanup.bind(this);
  }
  show(textToShow = "") {
    this.elem.removeEventListener("transitionend", this.hideCleanup);
    this.textElem.textContent = textToShow;
    this.elem.style.display = "grid";
    setTimeout(() => {
      this.elem.classList.add("showing");
    }, 1);
    if (this.autohide) {
      const words = textToShow.split(" ").length;
      const timeToShow = Math.max(2e3, 1e3 + 250 * words);
      setTimeout(this.hide.bind(this), timeToShow);
    }
  }
  hide() {
    this.elem.classList.remove("showing");
    this.elem.addEventListener("transitionend", this.hideCleanup);
  }
  hideCleanup() {
    this.elem.style.display = "none";
    this.elem.removeEventListener("transitionend", this.hideCleanup);
  }
};
var notification_default = Notification;

// resources/js/components/optional-input.js
var OptionalInput = class {
  setup() {
    this.removeButton = this.$refs.remove;
    this.showButton = this.$refs.show;
    this.input = this.$refs.input;
    this.setupListeners();
  }
  setupListeners() {
    onSelect(this.removeButton, () => {
      this.input.value = "";
      this.input.classList.add("hidden");
      this.removeButton.classList.add("hidden");
      this.showButton.classList.remove("hidden");
    });
    onSelect(this.showButton, () => {
      this.input.classList.remove("hidden");
      this.removeButton.classList.remove("hidden");
      this.showButton.classList.add("hidden");
    });
  }
};
var optional_input_default = OptionalInput;

// resources/js/components/page-comments.js
var PageComments = class {
  setup() {
    this.elem = this.$el;
    this.pageId = Number(this.$opts.pageId);
    this.container = this.$refs.commentContainer;
    this.formContainer = this.$refs.formContainer;
    this.commentCountBar = this.$refs.commentCountBar;
    this.addButtonContainer = this.$refs.addButtonContainer;
    this.replyToRow = this.$refs.replyToRow;
    this.updatedText = this.$opts.updatedText;
    this.deletedText = this.$opts.deletedText;
    this.createdText = this.$opts.createdText;
    this.countText = this.$opts.countText;
    this.editingComment = null;
    this.parentId = null;
    if (this.formContainer) {
      this.form = this.formContainer.querySelector("form");
      this.formInput = this.form.querySelector("textarea");
      this.form.addEventListener("submit", this.saveComment.bind(this));
    }
    this.elem.addEventListener("click", this.handleAction.bind(this));
    this.elem.addEventListener("submit", this.updateComment.bind(this));
  }
  handleAction(event) {
    let actionElem = event.target.closest("[action]");
    if (event.target.matches('a[href^="#"]')) {
      const id = event.target.href.split("#")[1];
      scrollAndHighlightElement(document.querySelector("#" + id));
    }
    if (actionElem === null)
      return;
    event.preventDefault();
    const action = actionElem.getAttribute("action");
    const comment = actionElem.closest("[comment]");
    if (action === "edit")
      this.editComment(comment);
    if (action === "closeUpdateForm")
      this.closeUpdateForm();
    if (action === "delete")
      this.deleteComment(comment);
    if (action === "addComment") {
      console.log("here");
      this.showForm();
    }
    if (action === "hideForm")
      this.hideForm();
    if (action === "reply")
      this.setReply(comment);
    if (action === "remove-reply-to")
      this.removeReplyTo();
  }
  closeUpdateForm() {
    if (!this.editingComment)
      return;
    this.editingComment.querySelector("[comment-content]").style.display = "block";
    this.editingComment.querySelector("[comment-edit-container]").style.display = "none";
  }
  editComment(commentElem) {
    this.hideForm();
    if (this.editingComment)
      this.closeUpdateForm();
    commentElem.querySelector("[comment-content]").style.display = "none";
    commentElem.querySelector("[comment-edit-container]").style.display = "block";
    let textArea = commentElem.querySelector("[comment-edit-container] textarea");
    let lineCount = textArea.value.split("\n").length;
    textArea.style.height = lineCount * 20 + 40 + "px";
    this.editingComment = commentElem;
  }
  updateComment(event) {
    let form = event.target;
    event.preventDefault();
    let text = form.querySelector("textarea").value;
    let reqData = {
      text,
      parent_id: this.parentId || null
    };
    this.showLoading(form);
    let commentId = this.editingComment.getAttribute("comment");
    window.$http.put(`/comment/${commentId}`, reqData).then((resp) => {
      let newComment = document.createElement("div");
      newComment.innerHTML = resp.data;
      this.editingComment.innerHTML = newComment.children[0].innerHTML;
      window.$events.success(this.updatedText);
      window.components.init(this.editingComment);
      this.closeUpdateForm();
      this.editingComment = null;
    }).catch(window.$events.showValidationErrors).then(() => {
      this.hideLoading(form);
    });
  }
  deleteComment(commentElem) {
    let id = commentElem.getAttribute("comment");
    this.showLoading(commentElem.querySelector("[comment-content]"));
    window.$http.delete(`/comment/${id}`).then((resp) => {
      commentElem.parentNode.removeChild(commentElem);
      window.$events.success(this.deletedText);
      this.updateCount();
      this.hideForm();
    });
  }
  saveComment(event) {
    event.preventDefault();
    event.stopPropagation();
    let text = this.formInput.value;
    let reqData = {
      text,
      parent_id: this.parentId || null
    };
    this.showLoading(this.form);
    window.$http.post(`/comment/${this.pageId}`, reqData).then((resp) => {
      let newComment = document.createElement("div");
      newComment.innerHTML = resp.data;
      let newElem = newComment.children[0];
      this.container.appendChild(newElem);
      window.components.init(newElem);
      window.$events.success(this.createdText);
      this.resetForm();
      this.updateCount();
    }).catch((err) => {
      window.$events.showValidationErrors(err);
      this.hideLoading(this.form);
    });
  }
  updateCount() {
    let count = this.container.children.length;
    this.elem.querySelector("[comments-title]").textContent = window.trans_plural(this.countText, count, { count });
  }
  resetForm() {
    this.formInput.value = "";
    this.formContainer.appendChild(this.form);
    this.hideForm();
    this.removeReplyTo();
    this.hideLoading(this.form);
  }
  showForm() {
    this.formContainer.style.display = "block";
    this.formContainer.parentNode.style.display = "block";
    this.addButtonContainer.style.display = "none";
    this.formInput.focus();
    this.formInput.scrollIntoView({ behavior: "smooth" });
  }
  hideForm() {
    this.formContainer.style.display = "none";
    this.formContainer.parentNode.style.display = "none";
    if (this.getCommentCount() > 0) {
      this.elem.appendChild(this.addButtonContainer);
    } else {
      this.commentCountBar.appendChild(this.addButtonContainer);
    }
    this.addButtonContainer.style.display = "block";
  }
  getCommentCount() {
    return this.elem.querySelectorAll(".comment-box[comment]").length;
  }
  setReply(commentElem) {
    this.showForm();
    this.parentId = Number(commentElem.getAttribute("local-id"));
    this.replyToRow.style.display = "block";
    const replyLink = this.replyToRow.querySelector("a");
    replyLink.textContent = `#${this.parentId}`;
    replyLink.href = `#comment${this.parentId}`;
  }
  removeReplyTo() {
    this.parentId = null;
    this.replyToRow.style.display = "none";
  }
  showLoading(formElem) {
    const groups = formElem.querySelectorAll(".form-group");
    for (let group of groups) {
      group.style.display = "none";
    }
    formElem.querySelector(".form-group.loading").style.display = "block";
  }
  hideLoading(formElem) {
    const groups = formElem.querySelectorAll(".form-group");
    for (let group of groups) {
      group.style.display = "block";
    }
    formElem.querySelector(".form-group.loading").style.display = "none";
  }
};
var page_comments_default = PageComments;

// resources/js/components/page-display.js
var import_clipboard2 = __toESM(require_clipboard_min());
var PageDisplay = class {
  constructor(elem) {
    this.elem = elem;
    this.pageId = elem.getAttribute("page-display");
    window.importVersioned("code").then((Code) => Code.highlight());
    this.setupNavHighlighting();
    this.setupDetailsCodeBlockRefresh();
    if (window.location.hash) {
      let text = window.location.hash.replace(/\%20/g, " ").substr(1);
      this.goToText(text);
    }
    const sidebarPageNav = document.querySelector(".sidebar-page-nav");
    if (sidebarPageNav) {
      onChildEvent(sidebarPageNav, "a", "click", (event, child) => {
        event.preventDefault();
        window.components["tri-layout"][0].showContent();
        const contentId = child.getAttribute("href").substr(1);
        this.goToText(contentId);
        window.history.pushState(null, null, "#" + contentId);
      });
    }
  }
  goToText(text) {
    const idElem = document.getElementById(text);
    forEach(".page-content [data-highlighted]", (elem) => {
      elem.removeAttribute("data-highlighted");
      elem.style.backgroundColor = null;
    });
    if (idElem !== null) {
      scrollAndHighlightElement(idElem);
    } else {
      const textElem = findText(".page-content > div > *", text);
      if (textElem) {
        scrollAndHighlightElement(textElem);
      }
    }
  }
  setupPointer() {
    let pointer = document.getElementById("pointer");
    if (!pointer) {
      return;
    }
    pointer = pointer.parentNode.removeChild(pointer);
    const pointerInner = pointer.querySelector("div.pointer");
    let pointerShowing = false;
    let isSelection = false;
    let pointerModeLink = true;
    let pointerSectionId = "";
    onChildEvent(pointer, "input", "click", (event, input) => {
      input.select();
      event.stopPropagation();
    });
    onEvents(pointer, ["click", "focus"], (event) => {
      event.stopPropagation();
    });
    onChildEvent(pointer, "span.icon", "click", (event, icon) => {
      event.stopPropagation();
      pointerModeLink = !pointerModeLink;
      icon.querySelector('[data-icon="include"]').style.display = !pointerModeLink ? "inline" : "none";
      icon.querySelector('[data-icon="link"]').style.display = pointerModeLink ? "inline" : "none";
      updatePointerContent();
    });
    new import_clipboard2.default(pointer.querySelector("button"));
    onEvents(document.body, ["click", "focus"], (event) => {
      if (!pointerShowing || isSelection)
        return;
      pointer = pointer.parentElement.removeChild(pointer);
      pointerShowing = false;
    });
    let updatePointerContent = (element) => {
      let inputText = pointerModeLink ? window.baseUrl(`/link/${this.pageId}#${pointerSectionId}`) : `{{@${this.pageId}#${pointerSectionId}}}`;
      if (pointerModeLink && !inputText.startsWith("http")) {
        inputText = window.location.protocol + "//" + window.location.host + inputText;
      }
      pointer.querySelector("input").value = inputText;
      const editAnchor = pointer.querySelector("#pointer-edit");
      if (editAnchor && element) {
        const editHref = editAnchor.dataset.editHref;
        const elementId = element.id;
        const queryContent = element.textContent && element.textContent.substring(0, 50);
        editAnchor.href = `${editHref}?content-id=${elementId}&content-text=${encodeURIComponent(queryContent)}`;
      }
    };
    forEach('.page-content [id^="bkmrk"]', (bookMarkElem) => {
      onEvents(bookMarkElem, ["mouseup", "keyup"], (event) => {
        event.stopPropagation();
        let selection = window.getSelection();
        if (selection.toString().length === 0)
          return;
        pointerSectionId = bookMarkElem.id;
        updatePointerContent(bookMarkElem);
        bookMarkElem.parentNode.insertBefore(pointer, bookMarkElem);
        pointer.style.display = "block";
        pointerShowing = true;
        isSelection = true;
        requestAnimationFrame(() => {
          const bookMarkBounds = bookMarkElem.getBoundingClientRect();
          let pointerLeftOffset = event.pageX - bookMarkBounds.left - 164;
          if (pointerLeftOffset < 0) {
            pointerLeftOffset = 0;
          }
          const pointerLeftOffsetPercent = pointerLeftOffset / bookMarkBounds.width * 100;
          pointerInner.style.left = pointerLeftOffsetPercent + "%";
          setTimeout(() => {
            isSelection = false;
          }, 100);
        });
      });
    });
  }
  setupNavHighlighting() {
    if (!("IntersectionObserver" in window) || !("IntersectionObserverEntry" in window) || !("intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
      return;
    }
    let pageNav = document.querySelector(".sidebar-page-nav");
    let headings = document.querySelector(".page-content").querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (headings.length > 0 && pageNav !== null) {
      addNavObserver(headings);
    }
    function addNavObserver(headings2) {
      let intersectOpts = {
        rootMargin: "0px 0px 0px 0px",
        threshold: 1
      };
      let pageNavObserver = new IntersectionObserver(headingVisibilityChange, intersectOpts);
      for (let heading of headings2) {
        pageNavObserver.observe(heading);
      }
    }
    function headingVisibilityChange(entries, observer) {
      for (let entry of entries) {
        let isVisible = entry.intersectionRatio === 1;
        toggleAnchorHighlighting(entry.target.id, isVisible);
      }
    }
    function toggleAnchorHighlighting(elementId, shouldHighlight) {
      forEach('a[href="#' + elementId + '"]', (anchor) => {
        anchor.closest("li").classList.toggle("current-heading", shouldHighlight);
      });
    }
  }
  setupDetailsCodeBlockRefresh() {
    const onToggle = (event) => {
      const codeMirrors = [...event.target.querySelectorAll(".CodeMirror")];
      codeMirrors.forEach((cm) => cm.CodeMirror && cm.CodeMirror.refresh());
    };
    const details = [...this.elem.querySelectorAll("details")];
    details.forEach((detail) => detail.addEventListener("toggle", onToggle));
  }
};
var page_display_default = PageDisplay;

// resources/js/services/dates.js
function utcTimeStampToLocalTime(timestamp) {
  let date = new Date(timestamp * 1e3);
  let hours = date.getHours();
  let mins = date.getMinutes();
  return `${(hours > 9 ? "" : "0") + hours}:${(mins > 9 ? "" : "0") + mins}`;
}

// resources/js/components/page-editor.js
var PageEditor = class {
  setup() {
    this.draftsEnabled = this.$opts.draftsEnabled === "true";
    this.editorType = this.$opts.editorType;
    this.pageId = Number(this.$opts.pageId);
    this.isNewDraft = this.$opts.pageNewDraft === "true";
    this.hasDefaultTitle = this.$opts.hasDefaultTitle || false;
    this.container = this.$el;
    this.titleElem = this.$refs.titleContainer.querySelector("input");
    this.saveDraftButton = this.$refs.saveDraft;
    this.discardDraftButton = this.$refs.discardDraft;
    this.discardDraftWrap = this.$refs.discardDraftWrap;
    this.draftDisplay = this.$refs.draftDisplay;
    this.draftDisplayIcon = this.$refs.draftDisplayIcon;
    this.changelogInput = this.$refs.changelogInput;
    this.changelogDisplay = this.$refs.changelogDisplay;
    this.draftText = this.$opts.draftText;
    this.autosaveFailText = this.$opts.autosaveFailText;
    this.editingPageText = this.$opts.editingPageText;
    this.draftDiscardedText = this.$opts.draftDiscardedText;
    this.setChangelogText = this.$opts.setChangelogText;
    this.editorHTML = "";
    this.editorMarkdown = "";
    this.autoSave = {
      interval: null,
      frequency: 3e4,
      last: 0
    };
    this.shownWarningsCache = /* @__PURE__ */ new Set();
    if (this.pageId !== 0 && this.draftsEnabled) {
      window.setTimeout(() => {
        this.startAutoSave();
      }, 1e3);
    }
    this.draftDisplay.innerHTML = this.draftText;
    this.setupListeners();
    this.setInitialFocus();
  }
  setupListeners() {
    window.$events.listen("editor-save-draft", this.saveDraft.bind(this));
    window.$events.listen("editor-save-page", this.savePage.bind(this));
    window.$events.listen("editor-html-change", (html) => {
      this.editorHTML = html;
    });
    window.$events.listen("editor-markdown-change", (markdown) => {
      this.editorMarkdown = markdown;
    });
    this.changelogInput.addEventListener("change", this.updateChangelogDisplay.bind(this));
    onSelect(this.saveDraftButton, this.saveDraft.bind(this));
    onSelect(this.discardDraftButton, this.discardDraft.bind(this));
  }
  setInitialFocus() {
    if (this.hasDefaultTitle) {
      return this.titleElem.select();
    }
    window.setTimeout(() => {
      window.$events.emit("editor::focus", "");
    }, 500);
  }
  startAutoSave() {
    let lastContent = this.titleElem.value.trim() + "::" + this.editorHTML;
    this.autoSaveInterval = window.setInterval(() => {
      let savedRecently = Date.now() - this.autoSave.last < this.autoSave.frequency / 2;
      if (savedRecently)
        return;
      const newContent = this.titleElem.value.trim() + "::" + this.editorHTML;
      if (newContent !== lastContent) {
        lastContent = newContent;
        this.saveDraft();
      }
    }, this.autoSave.frequency);
  }
  savePage() {
    this.container.closest("form").submit();
  }
  async saveDraft() {
    const data = {
      name: this.titleElem.value.trim(),
      html: this.editorHTML
    };
    if (this.editorType === "markdown") {
      data.markdown = this.editorMarkdown;
    }
    try {
      const resp = await window.$http.put(`/ajax/page/${this.pageId}/save-draft`, data);
      if (!this.isNewDraft) {
        this.toggleDiscardDraftVisibility(true);
      }
      this.draftNotifyChange(`${resp.data.message} ${utcTimeStampToLocalTime(resp.data.timestamp)}`);
      this.autoSave.last = Date.now();
      if (resp.data.warning && !this.shownWarningsCache.has(resp.data.warning)) {
        window.$events.emit("warning", resp.data.warning);
        this.shownWarningsCache.add(resp.data.warning);
      }
    } catch (err) {
      try {
        const saveKey = `draft-save-fail-${new Date().toISOString()}`;
        window.localStorage.setItem(saveKey, JSON.stringify(data));
      } catch (err2) {
      }
      window.$events.emit("error", this.autosaveFailText);
    }
  }
  draftNotifyChange(text) {
    this.draftDisplay.innerText = text;
    this.draftDisplayIcon.classList.add("visible");
    window.setTimeout(() => {
      this.draftDisplayIcon.classList.remove("visible");
    }, 2e3);
  }
  async discardDraft() {
    let response;
    try {
      response = await window.$http.get(`/ajax/page/${this.pageId}`);
    } catch (e) {
      return console.error(e);
    }
    if (this.autoSave.interval) {
      window.clearInterval(this.autoSave.interval);
    }
    this.draftDisplay.innerText = this.editingPageText;
    this.toggleDiscardDraftVisibility(false);
    window.$events.emit("editor::replace", {
      html: response.data.html,
      markdown: response.data.markdown
    });
    this.titleElem.value = response.data.name;
    window.setTimeout(() => {
      this.startAutoSave();
    }, 1e3);
    window.$events.emit("success", this.draftDiscardedText);
  }
  updateChangelogDisplay() {
    let summary = this.changelogInput.value.trim();
    if (summary.length === 0) {
      summary = this.setChangelogText;
    } else if (summary.length > 16) {
      summary = summary.slice(0, 16) + "...";
    }
    this.changelogDisplay.innerText = summary;
  }
  toggleDiscardDraftVisibility(show2) {
    this.discardDraftWrap.classList.toggle("hidden", !show2);
  }
};
var page_editor_default = PageEditor;

// resources/js/components/page-picker.js
var PagePicker = class {
  constructor(elem) {
    this.elem = elem;
    this.input = elem.querySelector("input");
    this.resetButton = elem.querySelector("[page-picker-reset]");
    this.selectButton = elem.querySelector("[page-picker-select]");
    this.display = elem.querySelector("[page-picker-display]");
    this.defaultDisplay = elem.querySelector("[page-picker-default]");
    this.buttonSep = elem.querySelector("span.sep");
    this.value = this.input.value;
    this.setupListeners();
  }
  setupListeners() {
    this.selectButton.addEventListener("click", this.showPopup.bind(this));
    this.display.parentElement.addEventListener("click", this.showPopup.bind(this));
    this.resetButton.addEventListener("click", (event) => {
      this.setValue("", "");
    });
  }
  showPopup() {
    window.EntitySelectorPopup.show((entity) => {
      this.setValue(entity.id, entity.name);
    });
  }
  setValue(value, name) {
    this.value = value;
    this.input.value = value;
    this.controlView(name);
  }
  controlView(name) {
    let hasValue = this.value && this.value !== 0;
    toggleElem(this.resetButton, hasValue);
    toggleElem(this.buttonSep, hasValue);
    toggleElem(this.defaultDisplay, !hasValue);
    toggleElem(this.display, hasValue);
    if (hasValue) {
      let id = this.getAssetIdFromVal();
      this.display.textContent = `#${id}, ${name}`;
      this.display.href = window.baseUrl(`/link/${id}`);
    }
  }
  getAssetIdFromVal() {
    return Number(this.value);
  }
};
function toggleElem(elem, show2) {
  let display = elem.tagName === "BUTTON" || elem.tagName === "SPAN" ? "inline-block" : "block";
  elem.style.display = show2 ? display : "none";
}
var page_picker_default = PagePicker;

// resources/js/components/permissions-table.js
var PermissionsTable = class {
  constructor(elem) {
    this.container = elem;
    const toggleAll = elem.querySelector("[permissions-table-toggle-all]");
    toggleAll.addEventListener("click", this.toggleAllClick.bind(this));
    const toggleRowElems = elem.querySelectorAll("[permissions-table-toggle-all-in-row]");
    for (let toggleRowElem of toggleRowElems) {
      toggleRowElem.addEventListener("click", this.toggleRowClick.bind(this));
    }
    const toggleColumnElems = elem.querySelectorAll("[permissions-table-toggle-all-in-column]");
    for (let toggleColElem of toggleColumnElems) {
      toggleColElem.addEventListener("click", this.toggleColumnClick.bind(this));
    }
  }
  toggleAllClick(event) {
    event.preventDefault();
    this.toggleAllInElement(this.container);
  }
  toggleRowClick(event) {
    event.preventDefault();
    this.toggleAllInElement(event.target.closest("tr"));
  }
  toggleColumnClick(event) {
    event.preventDefault();
    const tableCell = event.target.closest("th,td");
    const colIndex = Array.from(tableCell.parentElement.children).indexOf(tableCell);
    const tableRows = tableCell.closest("table").querySelectorAll("tr");
    const inputsToToggle = [];
    for (let row of tableRows) {
      const targetCell = row.children[colIndex];
      if (targetCell) {
        inputsToToggle.push(...targetCell.querySelectorAll("input[type=checkbox]"));
      }
    }
    this.toggleAllInputs(inputsToToggle);
  }
  toggleAllInElement(domElem) {
    const inputsToToggle = domElem.querySelectorAll("input[type=checkbox]");
    this.toggleAllInputs(inputsToToggle);
  }
  toggleAllInputs(inputsToToggle) {
    const currentState = inputsToToggle.length > 0 ? inputsToToggle[0].checked : false;
    for (let checkbox of inputsToToggle) {
      checkbox.checked = !currentState;
      checkbox.dispatchEvent(new Event("change"));
    }
  }
};
var permissions_table_default = PermissionsTable;

// resources/js/components/popup.js
var Popup = class {
  setup() {
    this.container = this.$el;
    this.hideButtons = this.$manyRefs.hide || [];
    this.onkeyup = null;
    this.onHide = null;
    this.setupListeners();
  }
  setupListeners() {
    let lastMouseDownTarget = null;
    this.container.addEventListener("mousedown", (event) => {
      lastMouseDownTarget = event.target;
    });
    this.container.addEventListener("click", (event) => {
      if (event.target === this.container && lastMouseDownTarget === this.container) {
        return this.hide();
      }
    });
    onSelect(this.hideButtons, (e) => this.hide());
  }
  hide(onComplete = null) {
    fadeOut(this.container, 240, onComplete);
    if (this.onkeyup) {
      window.removeEventListener("keyup", this.onkeyup);
      this.onkeyup = null;
    }
    if (this.onHide) {
      this.onHide();
    }
  }
  show(onComplete = null, onHide = null) {
    fadeIn(this.container, 240, onComplete);
    this.onkeyup = (event) => {
      if (event.key === "Escape") {
        this.hide();
      }
    };
    window.addEventListener("keyup", this.onkeyup);
    this.onHide = onHide;
  }
};
var popup_default = Popup;

// resources/js/components/setting-app-color-picker.js
var SettingAppColorPicker = class {
  constructor(elem) {
    this.elem = elem;
    this.colorInput = elem.querySelector("input[type=color]");
    this.lightColorInput = elem.querySelector('input[name="setting-app-color-light"]');
    this.resetButton = elem.querySelector("[setting-app-color-picker-reset]");
    this.defaultButton = elem.querySelector("[setting-app-color-picker-default]");
    this.colorInput.addEventListener("change", this.updateColor.bind(this));
    this.colorInput.addEventListener("input", this.updateColor.bind(this));
    this.resetButton.addEventListener("click", (event) => {
      this.colorInput.value = this.colorInput.dataset.current;
      this.updateColor();
    });
    this.defaultButton.addEventListener("click", (event) => {
      this.colorInput.value = this.colorInput.dataset.default;
      this.updateColor();
    });
  }
  updateColor() {
    const hexVal = this.colorInput.value;
    const rgb = this.hexToRgb(hexVal);
    const rgbLightVal = "rgba(" + [rgb.r, rgb.g, rgb.b, "0.15"].join(",") + ")";
    this.lightColorInput.value = rgbLightVal;
    const customStyles = document.getElementById("custom-styles");
    const oldColor = customStyles.getAttribute("data-color");
    const oldColorLight = customStyles.getAttribute("data-color-light");
    customStyles.innerHTML = customStyles.innerHTML.split(oldColor).join(hexVal);
    customStyles.innerHTML = customStyles.innerHTML.split(oldColorLight).join(rgbLightVal);
    customStyles.setAttribute("data-color", hexVal);
    customStyles.setAttribute("data-color-light", rgbLightVal);
  }
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
      r: result ? parseInt(result[1], 16) : 0,
      g: result ? parseInt(result[2], 16) : 0,
      b: result ? parseInt(result[3], 16) : 0
    };
  }
};
var setting_app_color_picker_default = SettingAppColorPicker;

// resources/js/components/setting-color-picker.js
var SettingColorPicker = class {
  constructor(elem) {
    this.elem = elem;
    this.colorInput = elem.querySelector("input[type=color]");
    this.resetButton = elem.querySelector("[setting-color-picker-reset]");
    this.defaultButton = elem.querySelector("[setting-color-picker-default]");
    this.resetButton.addEventListener("click", (event) => {
      this.colorInput.value = this.colorInput.dataset.current;
    });
    this.defaultButton.addEventListener("click", (event) => {
      this.colorInput.value = this.colorInput.dataset.default;
    });
  }
};
var setting_color_picker_default = SettingColorPicker;

// resources/js/components/shelf-sort.js
var ShelfSort = class {
  constructor(elem) {
    this.elem = elem;
    this.input = document.getElementById("books-input");
    this.shelfBooksList = elem.querySelector("[shelf-sort-assigned-books]");
    this.initSortable();
    this.setupListeners();
  }
  initSortable() {
    const scrollBoxes = this.elem.querySelectorAll(".scroll-box");
    for (let scrollBox of scrollBoxes) {
      new sortable_esm_default(scrollBox, {
        group: "shelf-books",
        ghostClass: "primary-background-light",
        animation: 150,
        onSort: this.onChange.bind(this)
      });
    }
  }
  setupListeners() {
    this.elem.addEventListener("click", (event) => {
      const sortItem = event.target.closest(".scroll-box-item:not(.instruction)");
      if (sortItem) {
        event.preventDefault();
        this.sortItemClick(sortItem);
      }
    });
  }
  sortItemClick(sortItem) {
    const lists = this.elem.querySelectorAll(".scroll-box");
    const newList = Array.from(lists).filter((list) => sortItem.parentElement !== list);
    if (newList.length > 0) {
      newList[0].appendChild(sortItem);
    }
    this.onChange();
  }
  onChange() {
    const shelfBookElems = Array.from(this.shelfBooksList.querySelectorAll("[data-id]"));
    this.input.value = shelfBookElems.map((elem) => elem.getAttribute("data-id")).join(",");
  }
};
var shelf_sort_default = ShelfSort;

// resources/js/components/sidebar.js
var Sidebar = class {
  constructor(elem) {
    this.elem = elem;
    this.toggleElem = elem.querySelector(".sidebar-toggle");
    this.toggleElem.addEventListener("click", this.toggle.bind(this));
  }
  toggle(show2 = true) {
    this.elem.classList.toggle("open");
  }
};
var sidebar_default = Sidebar;

// resources/js/components/sortable-list.js
var SortableList = class {
  setup() {
    this.container = this.$el;
    this.handleSelector = this.$opts.handleSelector;
    const sortable = new sortable_esm_default(this.container, {
      handle: this.handleSelector,
      animation: 150,
      onSort: () => {
        this.$emit("sort", { ids: sortable.toArray() });
      },
      setData(dataTransferItem, dragEl2) {
        const jsonContent = dragEl2.getAttribute("data-drag-content");
        if (jsonContent) {
          const contentByType = JSON.parse(jsonContent);
          for (const [type, content] of Object.entries(contentByType)) {
            dataTransferItem.setData(type, content);
          }
        }
      },
      revertOnSpill: true,
      dropBubble: true,
      dragoverBubble: false
    });
  }
};
var sortable_list_default = SortableList;

// resources/js/components/submit-on-change.js
var SubmitOnChange = class {
  setup() {
    this.filter = this.$opts.filter;
    this.$el.addEventListener("change", (event) => {
      if (this.filter && !event.target.matches(this.filter)) {
        return;
      }
      const form = this.$el.closest("form");
      if (form) {
        form.submit();
      }
    });
  }
};
var submit_on_change_default = SubmitOnChange;

// resources/js/components/tabs.js
var Tabs = class {
  setup() {
    this.tabContentsByName = {};
    this.tabButtonsByName = {};
    this.allContents = [];
    this.allButtons = [];
    for (const [key, elems] of Object.entries(this.$manyRefs || {})) {
      if (key.startsWith("toggle")) {
        const cleanKey = key.replace("toggle", "").toLowerCase();
        onSelect(elems, (e) => this.show(cleanKey));
        this.allButtons.push(...elems);
        this.tabButtonsByName[cleanKey] = elems;
      }
      if (key.startsWith("content")) {
        const cleanKey = key.replace("content", "").toLowerCase();
        this.tabContentsByName[cleanKey] = elems;
        this.allContents.push(...elems);
      }
    }
  }
  show(key) {
    this.allContents.forEach((c) => {
      c.classList.add("hidden");
      c.classList.remove("selected");
    });
    this.allButtons.forEach((b) => b.classList.remove("selected"));
    const contents = this.tabContentsByName[key] || [];
    const buttons = this.tabButtonsByName[key] || [];
    if (contents.length > 0) {
      contents.forEach((c) => {
        c.classList.remove("hidden");
        c.classList.add("selected");
      });
      buttons.forEach((b) => b.classList.add("selected"));
    }
  }
};
var tabs_default = Tabs;

// resources/js/components/tag-manager.js
var TagManager = class {
  setup() {
    this.addRemoveComponentEl = this.$refs.addRemove;
    this.container = this.$el;
    this.rowSelector = this.$opts.rowSelector;
    this.setupListeners();
  }
  setupListeners() {
    this.container.addEventListener("change", (event) => {
      const addRemoveComponent = this.addRemoveComponentEl.components["add-remove-rows"];
      if (!this.hasEmptyRows()) {
        addRemoveComponent.add();
      }
    });
  }
  hasEmptyRows() {
    const rows = this.container.querySelectorAll(this.rowSelector);
    const firstEmpty = [...rows].find((row) => {
      return [...row.querySelectorAll("input")].filter((input) => input.value).length === 0;
    });
    return firstEmpty !== void 0;
  }
};
var tag_manager_default = TagManager;

// resources/js/components/template-manager.js
var TemplateManager = class {
  constructor(elem) {
    this.elem = elem;
    this.list = elem.querySelector("[template-manager-list]");
    this.searching = false;
    onChildEvent(this.elem, "[template-action]", "click", this.handleTemplateActionClick.bind(this));
    onChildEvent(this.elem, ".pagination a", "click", this.handlePaginationClick.bind(this));
    onChildEvent(this.elem, ".template-item-content", "click", this.handleTemplateItemClick.bind(this));
    onChildEvent(this.elem, ".template-item", "dragstart", this.handleTemplateItemDragStart.bind(this));
    this.setupSearchBox();
  }
  handleTemplateItemClick(event, templateItem) {
    const templateId = templateItem.closest("[template-id]").getAttribute("template-id");
    this.insertTemplate(templateId, "replace");
  }
  handleTemplateItemDragStart(event, templateItem) {
    const templateId = templateItem.closest("[template-id]").getAttribute("template-id");
    event.dataTransfer.setData("bookstack/template", templateId);
    event.dataTransfer.setData("text/plain", templateId);
  }
  handleTemplateActionClick(event, actionButton) {
    event.stopPropagation();
    const action = actionButton.getAttribute("template-action");
    const templateId = actionButton.closest("[template-id]").getAttribute("template-id");
    this.insertTemplate(templateId, action);
  }
  async insertTemplate(templateId, action = "replace") {
    const resp = await window.$http.get(`/templates/${templateId}`);
    const eventName = "editor::" + action;
    window.$events.emit(eventName, resp.data);
  }
  async handlePaginationClick(event, paginationLink) {
    event.preventDefault();
    const paginationUrl = paginationLink.getAttribute("href");
    const resp = await window.$http.get(paginationUrl);
    this.list.innerHTML = resp.data;
  }
  setupSearchBox() {
    const searchBox = this.elem.querySelector(".search-box");
    if (!searchBox)
      return;
    const input = searchBox.querySelector("input");
    const submitButton = searchBox.querySelector("button");
    const cancelButton = searchBox.querySelector("button.search-box-cancel");
    async function performSearch() {
      const searchTerm = input.value;
      const resp = await window.$http.get(`/templates`, {
        search: searchTerm
      });
      cancelButton.style.display = searchTerm ? "block" : "none";
      this.list.innerHTML = resp.data;
    }
    performSearch = performSearch.bind(this);
    searchBox.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        performSearch();
      }
    });
    submitButton.addEventListener("click", (event) => {
      performSearch();
    });
    cancelButton.addEventListener("click", (event) => {
      input.value = "";
      performSearch();
    });
  }
};
var template_manager_default = TemplateManager;

// resources/js/components/toggle-switch.js
var ToggleSwitch = class {
  constructor(elem) {
    this.elem = elem;
    this.input = elem.querySelector("input[type=hidden]");
    this.checkbox = elem.querySelector("input[type=checkbox]");
    this.checkbox.addEventListener("change", this.stateChange.bind(this));
  }
  stateChange() {
    this.input.value = this.checkbox.checked ? "true" : "false";
    const changeEvent = new Event("change");
    this.input.dispatchEvent(changeEvent);
  }
};
var toggle_switch_default = ToggleSwitch;

// resources/js/components/tri-layout.js
var TriLayout = class {
  setup() {
    this.container = this.$refs.container;
    this.tabs = this.$manyRefs.tab;
    this.lastLayoutType = "none";
    this.onDestroy = null;
    this.scrollCache = {
      "content": 0,
      "info": 0
    };
    this.lastTabShown = "content";
    this.mobileTabClick = this.mobileTabClick.bind(this);
    this.updateLayout();
    window.addEventListener("resize", (event) => {
      this.updateLayout();
    }, { passive: true });
  }
  updateLayout() {
    let newLayout = "tablet";
    if (window.innerWidth <= 1e3)
      newLayout = "mobile";
    if (window.innerWidth >= 1400)
      newLayout = "desktop";
    if (newLayout === this.lastLayoutType)
      return;
    if (this.onDestroy) {
      this.onDestroy();
      this.onDestroy = null;
    }
    if (newLayout === "desktop") {
      this.setupDesktop();
    } else if (newLayout === "mobile") {
      this.setupMobile();
    }
    this.lastLayoutType = newLayout;
  }
  setupMobile() {
    for (const tab of this.tabs) {
      tab.addEventListener("click", this.mobileTabClick);
    }
    this.onDestroy = () => {
      for (const tab of this.tabs) {
        tab.removeEventListener("click", this.mobileTabClick);
      }
    };
  }
  setupDesktop() {
  }
  mobileTabClick(event) {
    const tab = event.target.dataset.tab;
    this.showTab(tab);
  }
  showContent() {
    this.showTab("content", false);
  }
  showTab(tabName, scroll = true) {
    this.scrollCache[this.lastTabShown] = document.documentElement.scrollTop;
    for (const tab of this.tabs) {
      const isActive = tab.dataset.tab === tabName;
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    }
    const showInfo = tabName === "info";
    this.container.classList.toggle("show-info", showInfo);
    if (scroll) {
      const pageHeader = document.querySelector("header");
      const defaultScrollTop = pageHeader.getBoundingClientRect().bottom;
      document.documentElement.scrollTop = this.scrollCache[tabName] || defaultScrollTop;
      setTimeout(() => {
        document.documentElement.scrollTop = this.scrollCache[tabName] || defaultScrollTop;
      }, 50);
    }
    this.lastTabShown = tabName;
  }
};
var tri_layout_default = TriLayout;

// resources/js/components/user-select.js
var UserSelect = class {
  setup() {
    this.input = this.$refs.input;
    this.userInfoContainer = this.$refs.userInfo;
    this.hide = this.$el.components.dropdown.hide;
    onChildEvent(this.$el, "a.dropdown-search-item", "click", this.selectUser.bind(this));
  }
  selectUser(event, userEl) {
    event.preventDefault();
    const id = userEl.getAttribute("data-id");
    this.input.value = id;
    this.userInfoContainer.innerHTML = userEl.innerHTML;
    this.input.dispatchEvent(new Event("change", { bubbles: true }));
    this.hide();
  }
};
var user_select_default = UserSelect;

// resources/js/components/webhook-events.js
var WebhookEvents = class {
  setup() {
    this.checkboxes = this.$el.querySelectorAll('input[type="checkbox"]');
    this.allCheckbox = this.$el.querySelector('input[type="checkbox"][value="all"]');
    this.$el.addEventListener("change", (event) => {
      if (event.target.checked && event.target === this.allCheckbox) {
        this.deselectIndividualEvents();
      } else if (event.target.checked) {
        this.allCheckbox.checked = false;
      }
    });
  }
  deselectIndividualEvents() {
    for (const checkbox of this.checkboxes) {
      if (checkbox !== this.allCheckbox) {
        checkbox.checked = false;
      }
    }
  }
};
var webhook_events_default = WebhookEvents;

// resources/js/wysiwyg/shortcuts.js
function register(editor) {
  for (let i = 1; i < 5; i++) {
    editor.shortcuts.add("meta+" + i, "", ["FormatBlock", false, "h" + (i + 1)]);
  }
  editor.shortcuts.add("meta+5", "", ["FormatBlock", false, "p"]);
  editor.shortcuts.add("meta+d", "", ["FormatBlock", false, "p"]);
  editor.shortcuts.add("meta+6", "", ["FormatBlock", false, "blockquote"]);
  editor.shortcuts.add("meta+q", "", ["FormatBlock", false, "blockquote"]);
  editor.shortcuts.add("meta+7", "", ["codeeditor", false, "pre"]);
  editor.shortcuts.add("meta+e", "", ["codeeditor", false, "pre"]);
  editor.shortcuts.add("meta+8", "", ["FormatBlock", false, "code"]);
  editor.shortcuts.add("meta+shift+E", "", ["FormatBlock", false, "code"]);
  editor.shortcuts.add("meta+S", "", () => {
    window.$events.emit("editor-save-draft");
  });
  editor.shortcuts.add("meta+13", "", () => {
    window.$events.emit("editor-save-page");
  });
  editor.shortcuts.add("meta+9", "", function() {
    const selectedNode = editor.selection.getNode();
    const callout = selectedNode ? selectedNode.closest(".callout") : null;
    const formats2 = ["info", "success", "warning", "danger"];
    const currentFormatIndex = formats2.findIndex((format) => callout && callout.classList.contains(format));
    const newFormatIndex = (currentFormatIndex + 1) % formats2.length;
    const newFormat = formats2[newFormatIndex];
    editor.formatter.apply("callout" + newFormat);
  });
  editor.shortcuts.add("meta+shift+K", "", function() {
    window.EntitySelectorPopup.show(function(entity) {
      if (editor.selection.isCollapsed()) {
        editor.insertContent(editor.dom.createHTML("a", { href: entity.link }, editor.dom.encode(entity.name)));
      } else {
        editor.formatter.apply("link", { href: entity.link });
      }
      editor.selection.collapse(false);
      editor.focus();
    });
  });
}

// resources/js/wysiwyg/common-events.js
function listen2(editor) {
  window.$events.listen("editor::replace", ({ html }) => {
    editor.setContent(html);
  });
  window.$events.listen("editor::append", ({ html }) => {
    const content = editor.getContent() + html;
    editor.setContent(content);
  });
  window.$events.listen("editor::prepend", ({ html }) => {
    const content = html + editor.getContent();
    editor.setContent(content);
  });
  window.$events.listen("editor::insert", ({ html }) => {
    editor.insertContent(html);
  });
  window.$events.listen("editor::focus", () => {
    if (editor.initialized) {
      editor.focus();
    }
  });
}

// resources/js/wysiwyg/scrolling.js
function scrollToQueryString(editor) {
  const queryParams = new URL(window.location).searchParams;
  const scrollId = queryParams.get("content-id");
  if (scrollId) {
    scrollToText(editor, scrollId);
  }
}
function scrollToText(editor, scrollId) {
  const element = editor.dom.get(encodeURIComponent(scrollId).replace(/!/g, "%21"));
  if (!element) {
    return;
  }
  element.scrollIntoView();
  editor.selection.select(element, true);
  editor.selection.collapse(false);
  editor.focus();
}

// resources/js/wysiwyg/drop-paste-handling.js
var wrap;
var draggedContentEditable;
function hasTextContent(node) {
  return node && !!(node.textContent || node.innerText);
}
function paste(editor, options2, event) {
  const clipboard = new clipboard_default(event.clipboardData || event.dataTransfer);
  if (!clipboard.hasItems() || clipboard.containsTabularData()) {
    return;
  }
  const images = clipboard.getImages();
  for (const imageFile of images) {
    const id = "image-" + Math.random().toString(16).slice(2);
    const loadingImage = window.baseUrl("/loading.gif");
    event.preventDefault();
    setTimeout(() => {
      editor.insertContent(`<p><img src="${loadingImage}" id="${id}"></p>`);
      uploadImageFile(imageFile, options2.pageId).then((resp) => {
        const safeName = resp.name.replace(/"/g, "");
        const newImageHtml = `<img src="${resp.thumbs.display}" alt="${safeName}" />`;
        const newEl = editor.dom.create("a", {
          target: "_blank",
          href: resp.url
        }, newImageHtml);
        editor.dom.replace(newEl, id);
      }).catch((err) => {
        editor.dom.remove(id);
        window.$events.emit("error", options2.translations.imageUploadErrorText);
        console.log(err);
      });
    }, 10);
  }
}
async function uploadImageFile(file, pageId) {
  if (file === null || file.type.indexOf("image") !== 0) {
    throw new Error(`Not an image file`);
  }
  let ext = "png";
  if (file.name) {
    let fileNameMatches = file.name.match(/\.(.+)$/);
    if (fileNameMatches.length > 1)
      ext = fileNameMatches[1];
  }
  const remoteFilename = "image-" + Date.now() + "." + ext;
  const formData = new FormData();
  formData.append("file", file, remoteFilename);
  formData.append("uploaded_to", pageId);
  const resp = await window.$http.post(window.baseUrl("/images/gallery"), formData);
  return resp.data;
}
function dragStart2(editor, options2) {
  let node = editor.selection.getNode();
  if (node.nodeName === "IMG") {
    wrap = editor.dom.getParent(node, ".mceTemp");
    if (!wrap && node.parentNode.nodeName === "A" && !hasTextContent(node.parentNode)) {
      wrap = node.parentNode;
    }
  }
  if (node.hasAttribute("contenteditable") && node.getAttribute("contenteditable") === "false") {
    draggedContentEditable = node;
  }
}
function drop3(editor, options2, event) {
  let dom = editor.dom, rng = tinymce.dom.RangeUtils.getCaretRangeFromPoint(event.clientX, event.clientY, editor.getDoc());
  const templateId = event.dataTransfer && event.dataTransfer.getData("bookstack/template");
  if (templateId) {
    event.preventDefault();
    window.$http.get(`/templates/${templateId}`).then((resp) => {
      editor.selection.setRng(rng);
      editor.undoManager.transact(function() {
        editor.execCommand("mceInsertContent", false, resp.data.html);
      });
    });
  }
  if (dom.getParent(rng.startContainer, ".mceTemp")) {
    event.preventDefault();
  } else if (wrap) {
    event.preventDefault();
    editor.undoManager.transact(function() {
      editor.selection.setRng(rng);
      editor.selection.setNode(wrap);
      dom.remove(wrap);
    });
  }
  if (!event.isDefaultPrevented() && draggedContentEditable) {
    event.preventDefault();
    editor.undoManager.transact(function() {
      const selectedNode = editor.selection.getNode();
      const range = editor.selection.getRng();
      const selectedNodeRoot = selectedNode.closest("body > *");
      if (range.startOffset > range.startContainer.length / 2) {
        editor.$(selectedNodeRoot).after(draggedContentEditable);
      } else {
        editor.$(selectedNodeRoot).before(draggedContentEditable);
      }
    });
  }
  if (!event.isDefaultPrevented()) {
    paste(editor, options2, event);
  }
  wrap = null;
}
function listenForDragAndPaste(editor, options2) {
  editor.on("dragstart", () => dragStart2(editor, options2));
  editor.on("drop", (event) => drop3(editor, options2, event));
  editor.on("paste", (event) => paste(editor, options2, event));
}

// resources/js/wysiwyg/toolbars.js
function getPrimaryToolbar(options2) {
  const textDirPlugins = options2.textDirection === "rtl" ? "ltr rtl" : "";
  const toolbar = [
    "undo redo",
    "styleselect",
    "bold italic underline forecolor backcolor formatoverflow",
    "alignleft aligncenter alignright alignjustify",
    "bullist numlist listoverflow",
    textDirPlugins,
    "link table imagemanager-insert insertoverflow",
    "code about fullscreen"
  ];
  return toolbar.filter((row) => Boolean(row)).join(" | ");
}
function registerPrimaryToolbarGroups(editor) {
  editor.ui.registry.addGroupToolbarButton("formatoverflow", {
    icon: "more-drawer",
    tooltip: "More",
    items: "strikethrough superscript subscript inlinecode removeformat"
  });
  editor.ui.registry.addGroupToolbarButton("listoverflow", {
    icon: "more-drawer",
    tooltip: "More",
    items: "tasklist outdent indent"
  });
  editor.ui.registry.addGroupToolbarButton("insertoverflow", {
    icon: "more-drawer",
    tooltip: "More",
    items: "hr codeeditor drawio media details"
  });
}
function registerLinkContextToolbar(editor) {
  editor.ui.registry.addContextToolbar("linkcontexttoolbar", {
    predicate(node) {
      return node.closest("a") !== null;
    },
    position: "node",
    scope: "node",
    items: "link unlink openlink"
  });
}
function registerAdditionalToolbars(editor, options2) {
  registerPrimaryToolbarGroups(editor);
  registerLinkContextToolbar(editor);
}

// resources/js/wysiwyg/plugin-codeeditor.js
function elemIsCodeBlock(elem) {
  return elem.tagName.toLowerCase() === "code-block";
}
function showPopup(editor, code, language, callback) {
  window.components.first("code-editor").open(code, language, (newCode, newLang) => {
    callback(newCode, newLang);
    editor.focus();
  });
}
function showPopupForCodeBlock(editor, codeBlock) {
  showPopup(editor, codeBlock.getContent(), codeBlock.getLanguage(), (newCode, newLang) => {
    codeBlock.setContent(newCode, newLang);
  });
}
function defineCodeBlockCustomElement(editor) {
  const doc = editor.getDoc();
  const win = doc.defaultView;
  class CodeBlockElement extends win.HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      const linkElem = document.createElement("link");
      linkElem.setAttribute("rel", "stylesheet");
      linkElem.setAttribute("href", window.baseUrl("/dist/styles.css"));
      const cmContainer = document.createElement("div");
      cmContainer.style.pointerEvents = "none";
      cmContainer.contentEditable = "false";
      cmContainer.classList.add("CodeMirrorContainer");
      this.shadowRoot.append(linkElem, cmContainer);
    }
    getLanguage() {
      const getLanguageFromClassList = (classes) => {
        const langClasses = classes.split(" ").filter((cssClass) => cssClass.startsWith("language-"));
        return (langClasses[0] || "").replace("language-", "");
      };
      const code = this.querySelector("code");
      const pre = this.querySelector("pre");
      return getLanguageFromClassList(pre.className) || code && getLanguageFromClassList(code.className) || "";
    }
    setContent(content, language) {
      if (this.cm) {
        importVersioned("code").then((Code) => {
          Code.setContent(this.cm, content);
          Code.setMode(this.cm, language, content);
        });
      }
      let pre = this.querySelector("pre");
      if (!pre) {
        pre = doc.createElement("pre");
        this.append(pre);
      }
      pre.innerHTML = "";
      const code = doc.createElement("code");
      pre.append(code);
      code.innerText = content;
      code.className = `language-${language}`;
    }
    getContent() {
      const code = this.querySelector("code") || this.querySelector("pre");
      const tempEl = document.createElement("pre");
      tempEl.innerHTML = code.innerHTML.replace().replace(/<br\s*[\/]?>/gi, "\n").replace(/\ufeff/g, "");
      return tempEl.textContent;
    }
    connectedCallback() {
      const connectedTime = Date.now();
      if (this.cm) {
        return;
      }
      this.cleanChildContent();
      const content = this.getContent();
      const lines = content.split("\n").length;
      const height = lines * 19.2 + 18 + 24;
      this.style.height = `${height}px`;
      const container = this.shadowRoot.querySelector(".CodeMirrorContainer");
      const renderCodeMirror = (Code) => {
        this.cm = Code.wysiwygView(container, content, this.getLanguage());
        Code.updateLayout(this.cm);
        setTimeout(() => {
          this.style.height = null;
        }, 1);
      };
      window.importVersioned("code").then((Code) => {
        const timeout = Date.now() - connectedTime < 20 ? 20 : 0;
        setTimeout(() => renderCodeMirror(Code), timeout);
      });
    }
    cleanChildContent() {
      const pre = this.querySelector("pre");
      if (!pre)
        return;
      for (const preChild of pre.childNodes) {
        if (preChild.nodeName === "#text" && preChild.textContent === "\uFEFF") {
          preChild.remove();
        }
      }
    }
  }
  win.customElements.define("code-block", CodeBlockElement);
}
function register2(editor, url) {
  editor.ui.registry.addIcon("codeblock", '<svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1Zm1 2v14h14V5Z"/><path d="M11.103 15.423c.277.277.277.738 0 .922a.692.692 0 0 1-1.106 0l-4.057-3.78a.738.738 0 0 1 0-1.107l4.057-3.872c.276-.277.83-.277 1.106 0a.724.724 0 0 1 0 1.014L7.6 12.012ZM12.897 8.577c-.245-.312-.2-.675.08-.955.28-.281.727-.27 1.027.033l4.057 3.78a.738.738 0 0 1 0 1.107l-4.057 3.872c-.277.277-.83.277-1.107 0a.724.724 0 0 1 0-1.014l3.504-3.412z"/></svg>');
  editor.ui.registry.addButton("codeeditor", {
    tooltip: "Insert code block",
    icon: "codeblock",
    onAction() {
      editor.execCommand("codeeditor");
    }
  });
  editor.addCommand("codeeditor", () => {
    const selectedNode = editor.selection.getNode();
    const doc = selectedNode.ownerDocument;
    if (elemIsCodeBlock(selectedNode)) {
      showPopupForCodeBlock(editor, selectedNode);
    } else {
      const textContent = editor.selection.getContent({ format: "text" });
      showPopup(editor, textContent, "", (newCode, newLang) => {
        const pre = doc.createElement("pre");
        const code = doc.createElement("code");
        code.classList.add(`language-${newLang}`);
        code.innerText = newCode;
        pre.append(code);
        editor.insertContent(pre.outerHTML);
      });
    }
  });
  editor.on("dblclick", (event) => {
    let selectedNode = editor.selection.getNode();
    if (elemIsCodeBlock(selectedNode)) {
      showPopupForCodeBlock(editor, selectedNode);
    }
  });
  editor.on("PreInit", () => {
    editor.parser.addNodeFilter("pre", function(elms) {
      for (const el of elms) {
        const wrapper = new tinymce.html.Node.create("code-block", {
          contenteditable: "false"
        });
        const spans = el.getAll("span");
        for (const span of spans) {
          span.unwrap();
        }
        el.attr("style", null);
        el.wrap(wrapper);
      }
    });
    editor.parser.addNodeFilter("code-block", function(elms) {
      for (const el of elms) {
        el.attr("contenteditable", "false");
      }
    });
    editor.serializer.addNodeFilter("code-block", function(elms) {
      for (const el of elms) {
        el.unwrap();
      }
    });
  });
  editor.on("PreInit", () => {
    defineCodeBlockCustomElement(editor);
  });
}
function getPlugin(options2) {
  return register2;
}

// resources/js/wysiwyg/plugin-drawio.js
var pageEditor = null;
var currentNode = null;
var options = {};
function isDrawing(node) {
  return node.hasAttribute("drawio-diagram");
}
function showDrawingManager(mceEditor, selectedNode = null) {
  pageEditor = mceEditor;
  currentNode = selectedNode;
  window.ImageManager.show(function(image) {
    if (selectedNode) {
      let imgElem = selectedNode.querySelector("img");
      pageEditor.dom.setAttrib(imgElem, "src", image.url);
      pageEditor.dom.setAttrib(selectedNode, "drawio-diagram", image.id);
    } else {
      let imgHTML = `<div drawio-diagram="${image.id}" contenteditable="false"><img src="${image.url}"></div>`;
      pageEditor.insertContent(imgHTML);
    }
  }, "drawio");
}
function showDrawingEditor(mceEditor, selectedNode = null) {
  pageEditor = mceEditor;
  currentNode = selectedNode;
  drawio_default.show(options.drawioUrl, drawingInit, updateContent);
}
async function updateContent(pngData) {
  const id = "image-" + Math.random().toString(16).slice(2);
  const loadingImage = window.baseUrl("/loading.gif");
  const handleUploadError = (error2) => {
    if (error2.status === 413) {
      window.$events.emit("error", options.translations.serverUploadLimitText);
    } else {
      window.$events.emit("error", options.translations.imageUploadErrorText);
    }
    console.log(error2);
  };
  if (currentNode) {
    drawio_default.close();
    let imgElem = currentNode.querySelector("img");
    try {
      const img = await drawio_default.upload(pngData, options.pageId);
      pageEditor.dom.setAttrib(imgElem, "src", img.url);
      pageEditor.dom.setAttrib(currentNode, "drawio-diagram", img.id);
    } catch (err) {
      handleUploadError(err);
    }
    return;
  }
  setTimeout(async () => {
    pageEditor.insertContent(`<div drawio-diagram contenteditable="false"><img src="${loadingImage}" id="${id}"></div>`);
    drawio_default.close();
    try {
      const img = await drawio_default.upload(pngData, options.pageId);
      pageEditor.dom.setAttrib(id, "src", img.url);
      pageEditor.dom.get(id).parentNode.setAttribute("drawio-diagram", img.id);
    } catch (err) {
      pageEditor.dom.remove(id);
      handleUploadError(err);
    }
  }, 5);
}
function drawingInit() {
  if (!currentNode) {
    return Promise.resolve("");
  }
  let drawingId = currentNode.getAttribute("drawio-diagram");
  return drawio_default.load(drawingId);
}
function getPlugin2(providedOptions) {
  options = providedOptions;
  return function(editor, url) {
    editor.addCommand("drawio", () => {
      const selectedNode = editor.selection.getNode();
      showDrawingEditor(editor, isDrawing(selectedNode) ? selectedNode : null);
    });
    editor.ui.registry.addIcon("diagram", `<svg width="24" height="24" fill="${options.darkMode ? "#BBB" : "#000000"}" xmlns="http://www.w3.org/2000/svg"><path d="M20.716 7.639V2.845h-4.794v1.598h-7.99V2.845H3.138v4.794h1.598v7.99H3.138v4.794h4.794v-1.598h7.99v1.598h4.794v-4.794h-1.598v-7.99zM4.736 4.443h1.598V6.04H4.736zm1.598 14.382H4.736v-1.598h1.598zm9.588-1.598h-7.99v-1.598H6.334v-7.99h1.598V6.04h7.99v1.598h1.598v7.99h-1.598zm3.196 1.598H17.52v-1.598h1.598zM17.52 6.04V4.443h1.598V6.04zm-4.21 7.19h-2.79l-.582 1.599H8.643l2.717-7.191h1.119l2.724 7.19h-1.302zm-2.43-1.006h2.086l-1.039-3.06z"/></svg>`);
    editor.ui.registry.addSplitButton("drawio", {
      tooltip: "Insert/edit drawing",
      icon: "diagram",
      onAction() {
        editor.execCommand("drawio");
      },
      fetch(callback) {
        callback([
          {
            type: "choiceitem",
            text: "Drawing manager",
            value: "drawing-manager"
          }
        ]);
      },
      onItemAction(api, value) {
        if (value === "drawing-manager") {
          const selectedNode = editor.selection.getNode();
          showDrawingManager(editor, isDrawing(selectedNode) ? selectedNode : null);
        }
      }
    });
    editor.on("dblclick", (event) => {
      let selectedNode = editor.selection.getNode();
      if (!isDrawing(selectedNode))
        return;
      showDrawingEditor(editor, selectedNode);
    });
    editor.on("SetContent", function() {
      const drawings = editor.$("body > div[drawio-diagram]");
      if (!drawings.length)
        return;
      editor.undoManager.transact(function() {
        drawings.each((index2, elem) => {
          elem.setAttribute("contenteditable", "false");
        });
      });
    });
  };
}

// resources/js/wysiwyg/plugins-customhr.js
function register3(editor, url) {
  editor.addCommand("InsertHorizontalRule", function() {
    let hrElem = document.createElement("hr");
    let cNode = editor.selection.getNode();
    let parentNode = cNode.parentNode;
    parentNode.insertBefore(hrElem, cNode);
  });
  editor.ui.registry.addButton("hr", {
    icon: "horizontal-rule",
    tooltip: "Insert horizontal line",
    onAction() {
      editor.execCommand("InsertHorizontalRule");
    }
  });
}
function getPlugin3(options2) {
  return register3;
}

// resources/js/wysiwyg/plugins-imagemanager.js
function register4(editor, url) {
  editor.ui.registry.addButton("imagemanager-insert", {
    title: "Insert image",
    icon: "image",
    tooltip: "Insert image",
    onAction() {
      window.ImageManager.show(function(image) {
        const imageUrl = image.thumbs.display || image.url;
        let html = `<a href="${image.url}" target="_blank">`;
        html += `<img src="${imageUrl}" alt="${image.name}">`;
        html += "</a>";
        editor.execCommand("mceInsertContent", false, html);
      }, "gallery");
    }
  });
}
function getPlugin4(options2) {
  return register4;
}

// resources/js/wysiwyg/plugins-about.js
function register5(editor, url) {
  const aboutDialog = {
    title: "About the WYSIWYG Editor",
    url: window.baseUrl("/help/wysiwyg")
  };
  editor.ui.registry.addButton("about", {
    icon: "help",
    tooltip: "About the editor",
    onAction() {
      tinymce.activeEditor.windowManager.openUrl(aboutDialog);
    }
  });
}
function getPlugin5(options2) {
  return register5;
}

// resources/js/wysiwyg/plugins-details.js
function register6(editor, url) {
  editor.ui.registry.addIcon("details", '<svg width="24" height="24"><path d="M8.2 9a.5.5 0 0 0-.4.8l4 5.6a.5.5 0 0 0 .8 0l4-5.6a.5.5 0 0 0-.4-.8ZM20.122 18.151h-16c-.964 0-.934 2.7 0 2.7h16c1.139 0 1.173-2.7 0-2.7zM20.122 3.042h-16c-.964 0-.934 2.7 0 2.7h16c1.139 0 1.173-2.7 0-2.7z"/></svg>');
  editor.ui.registry.addIcon("togglefold", '<svg height="24"  width="24"><path d="M8.12 19.3c.39.39 1.02.39 1.41 0L12 16.83l2.47 2.47c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.17-3.17c-.39-.39-1.02-.39-1.41 0l-3.17 3.17c-.4.38-.4 1.02-.01 1.41zm7.76-14.6c-.39-.39-1.02-.39-1.41 0L12 7.17 9.53 4.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.03 0 1.42l3.17 3.17c.39.39 1.02.39 1.41 0l3.17-3.17c.4-.39.4-1.03.01-1.42z"/></svg>');
  editor.ui.registry.addIcon("togglelabel", '<svg height="18" width="18" viewBox="0 0 24 24"><path d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M6.5,8C5.67,8,5,7.33,5,6.5S5.67,5,6.5,5S8,5.67,8,6.5 S7.33,8,6.5,8z"/></svg>');
  editor.ui.registry.addButton("details", {
    icon: "details",
    tooltip: "Insert collapsible block",
    onAction() {
      editor.execCommand("InsertDetailsBlock");
    }
  });
  editor.ui.registry.addButton("removedetails", {
    icon: "table-delete-table",
    tooltip: "Unwrap",
    onAction() {
      unwrapDetailsInSelection(editor);
    }
  });
  editor.ui.registry.addButton("editdetials", {
    icon: "togglelabel",
    tooltip: "Edit label",
    onAction() {
      showDetailLabelEditWindow(editor);
    }
  });
  editor.on("dblclick", (event) => {
    if (!getSelectedDetailsBlock(editor) || event.target.closest("doc-root"))
      return;
    showDetailLabelEditWindow(editor);
  });
  editor.ui.registry.addButton("toggledetails", {
    icon: "togglefold",
    tooltip: "Toggle open/closed",
    onAction() {
      const details = getSelectedDetailsBlock(editor);
      details.toggleAttribute("open");
      editor.focus();
    }
  });
  editor.addCommand("InsertDetailsBlock", function() {
    let content = editor.selection.getContent({ format: "html" });
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const id = "details-" + Date.now();
    details.setAttribute("data-id", id);
    details.appendChild(summary);
    if (!content) {
      content = "<p><br></p>";
    }
    details.innerHTML += content;
    editor.insertContent(details.outerHTML);
    editor.focus();
    const domDetails = editor.dom.$(`[data-id="${id}"]`);
    if (domDetails) {
      const firstChild = domDetails.find("doc-root > *");
      if (firstChild) {
        firstChild[0].focus();
      }
      domDetails.removeAttr("data-id");
    }
  });
  editor.ui.registry.addContextToolbar("details", {
    predicate: function(node) {
      return node.nodeName.toLowerCase() === "details";
    },
    items: "editdetials toggledetails removedetails",
    position: "node",
    scope: "node"
  });
  editor.on("PreInit", () => {
    setupElementFilters(editor);
  });
}
function showDetailLabelEditWindow(editor) {
  const details = getSelectedDetailsBlock(editor);
  const dialog = editor.windowManager.open(detailsDialog(editor));
  dialog.setData({ summary: getSummaryTextFromDetails(details) });
}
function getSelectedDetailsBlock(editor) {
  return editor.selection.getNode().closest("details");
}
function getSummaryTextFromDetails(element) {
  const summary = element.querySelector("summary");
  if (!summary) {
    return "";
  }
  return summary.textContent;
}
function detailsDialog(editor) {
  return {
    title: "Edit collapsible block",
    body: {
      type: "panel",
      items: [
        {
          type: "input",
          name: "summary",
          label: "Toggle label"
        }
      ]
    },
    buttons: [
      {
        type: "cancel",
        text: "Cancel"
      },
      {
        type: "submit",
        text: "Save",
        primary: true
      }
    ],
    onSubmit(api) {
      const { summary } = api.getData();
      setSummary(editor, summary);
      api.close();
    }
  };
}
function setSummary(editor, summaryContent) {
  const details = getSelectedDetailsBlock(editor);
  if (!details)
    return;
  editor.undoManager.transact(() => {
    let summary = details.querySelector("summary");
    if (!summary) {
      summary = document.createElement("summary");
      details.prepend(summary);
    }
    summary.textContent = summaryContent;
  });
}
function unwrapDetailsInSelection(editor) {
  const details = editor.selection.getNode().closest("details");
  const selectionBm = editor.selection.getBookmark();
  if (details) {
    const elements = details.querySelectorAll("details > *:not(summary, doc-root), doc-root > *");
    editor.undoManager.transact(() => {
      for (const element of elements) {
        details.parentNode.insertBefore(element, details);
      }
      details.remove();
    });
  }
  editor.focus();
  editor.selection.moveToBookmark(selectionBm);
}
function setupElementFilters(editor) {
  editor.parser.addNodeFilter("details", function(elms) {
    for (const el of elms) {
      ensureDetailsWrappedInEditable(el);
    }
  });
  editor.serializer.addNodeFilter("details", function(elms) {
    for (const el of elms) {
      unwrapDetailsEditable(el);
      el.attr("open", null);
    }
  });
  editor.serializer.addNodeFilter("doc-root", function(elms) {
    for (const el of elms) {
      el.unwrap();
    }
  });
}
function ensureDetailsWrappedInEditable(detailsEl) {
  unwrapDetailsEditable(detailsEl);
  detailsEl.attr("contenteditable", "false");
  const wrap2 = tinymce.html.Node.create("doc-root", { contenteditable: "true" });
  for (const child of detailsEl.children()) {
    if (child.name !== "summary") {
      wrap2.append(child);
    }
  }
  detailsEl.append(wrap2);
}
function unwrapDetailsEditable(detailsEl) {
  detailsEl.attr("contenteditable", null);
  let madeUnwrap = false;
  for (const child of detailsEl.children()) {
    if (child.name === "doc-root") {
      child.unwrap();
      madeUnwrap = true;
    }
  }
  if (madeUnwrap) {
    unwrapDetailsEditable(detailsEl);
  }
}
function getPlugin6(options2) {
  return register6;
}

// resources/js/wysiwyg/plugins-tasklist.js
function register7(editor, url) {
  editor.ui.registry.addIcon("tasklist", '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22,8c0-0.55-0.45-1-1-1h-7c-0.55,0-1,0.45-1,1s0.45,1,1,1h7C21.55,9,22,8.55,22,8z M13,16c0,0.55,0.45,1,1,1h7 c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-7C13.45,15,13,15.45,13,16z M10.47,4.63c0.39,0.39,0.39,1.02,0,1.41l-4.23,4.25 c-0.39,0.39-1.02,0.39-1.42,0L2.7,8.16c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l1.42,1.42l3.54-3.54 C9.45,4.25,10.09,4.25,10.47,4.63z M10.48,12.64c0.39,0.39,0.39,1.02,0,1.41l-4.23,4.25c-0.39,0.39-1.02,0.39-1.42,0L2.7,16.16 c-0.39-0.39-0.39-1.02,0-1.41s1.02-0.39,1.41,0l1.42,1.42l3.54-3.54C9.45,12.25,10.09,12.25,10.48,12.64L10.48,12.64z"/></svg>');
  editor.ui.registry.addToggleButton("tasklist", {
    tooltip: "Task list",
    icon: "tasklist",
    active: false,
    onAction(api) {
      if (api.isActive()) {
        editor.execCommand("RemoveList");
      } else {
        editor.execCommand("InsertUnorderedList", null, {
          "list-item-attributes": {
            class: "task-list-item"
          },
          "list-style-type": "tasklist"
        });
      }
    },
    onSetup(api) {
      editor.on("NodeChange", (event) => {
        const parentListEl = event.parents.find((el) => el.nodeName === "LI");
        const inList = parentListEl && parentListEl.classList.contains("task-list-item");
        api.setActive(inList);
      });
    }
  });
  const existingBullListButton = editor.ui.registry.getAll().buttons.bullist;
  existingBullListButton.onSetup = function(api) {
    editor.on("NodeChange", (event) => {
      const parentList = event.parents.find((el) => el.nodeName === "LI");
      const inTaskList = parentList && parentList.classList.contains("task-list-item");
      const inUlList = parentList && parentList.parentNode.nodeName === "UL";
      api.setActive(inUlList && !inTaskList);
    });
  };
  existingBullListButton.onAction = function() {
    if (elementWithinTaskList(editor.selection.getNode())) {
      editor.execCommand("InsertOrderedList", null, {
        "list-item-attributes": { class: null }
      });
    }
    editor.execCommand("InsertUnorderedList", null, {
      "list-item-attributes": { class: null }
    });
  };
  const existingNumListButton = editor.ui.registry.getAll().buttons.numlist;
  existingNumListButton.onAction = function() {
    editor.execCommand("InsertOrderedList", null, {
      "list-item-attributes": { class: null }
    });
  };
  editor.on("PreInit", () => {
    editor.parser.addNodeFilter("li", function(nodes) {
      for (const node of nodes) {
        if (node.attributes.map.class === "task-list-item") {
          parseTaskListNode(node);
        }
      }
    });
    editor.serializer.addNodeFilter("li", function(nodes) {
      for (const node of nodes) {
        if (node.attributes.map.class === "task-list-item") {
          serializeTaskListNode(node);
        }
      }
    });
  });
  editor.on("click", function(event) {
    const clickedEl = event.target;
    if (clickedEl.nodeName === "LI" && clickedEl.classList.contains("task-list-item")) {
      handleTaskListItemClick(event, clickedEl, editor);
      event.preventDefault();
    }
  });
}
function elementWithinTaskList(element) {
  const listEl = element.closest("li");
  return listEl && listEl.parentNode.nodeName === "UL" && listEl.classList.contains("task-list-item");
}
function handleTaskListItemClick(event, clickedEl, editor) {
  const bounds = clickedEl.getBoundingClientRect();
  const withinBounds = event.clientX <= bounds.right && event.clientX >= bounds.left && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
  if (!withinBounds) {
    editor.undoManager.transact(() => {
      if (clickedEl.hasAttribute("checked")) {
        clickedEl.removeAttribute("checked");
      } else {
        clickedEl.setAttribute("checked", "checked");
      }
    });
  }
}
function parseTaskListNode(node) {
  node.attr("class", "task-list-item");
  for (const child of node.children()) {
    if (child.name === "input") {
      if (child.attr("checked") === "checked") {
        node.attr("checked", "checked");
      }
      child.remove();
    }
  }
}
function serializeTaskListNode(node) {
  const isChecked = node.attr("checked") === "checked";
  node.attr("checked", null);
  const inputAttrs = { type: "checkbox", disabled: "disabled" };
  if (isChecked) {
    inputAttrs.checked = "checked";
  }
  const checkbox = new tinymce.html.Node.create("input", inputAttrs);
  checkbox.shortEnded = true;
  node.firstChild ? node.insert(checkbox, node.firstChild, true) : node.append(checkbox);
}
function getPlugin7(options2) {
  return register7;
}

// resources/js/wysiwyg/config.js
var style_formats = [
  { title: "Large Header", format: "h2", preview: "color: blue;" },
  { title: "Medium Header", format: "h3" },
  { title: "Small Header", format: "h4" },
  { title: "Tiny Header", format: "h5" },
  { title: "Paragraph", format: "p", exact: true, classes: "" },
  { title: "Blockquote", format: "blockquote" },
  {
    title: "Callouts",
    items: [
      { title: "Information", format: "calloutinfo" },
      { title: "Success", format: "calloutsuccess" },
      { title: "Warning", format: "calloutwarning" },
      { title: "Danger", format: "calloutdanger" }
    ]
  }
];
var formats = {
  alignleft: { selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img", classes: "align-left" },
  aligncenter: { selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img", classes: "align-center" },
  alignright: { selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img", classes: "align-right" },
  calloutsuccess: { block: "p", exact: true, attributes: { class: "callout success" } },
  calloutinfo: { block: "p", exact: true, attributes: { class: "callout info" } },
  calloutwarning: { block: "p", exact: true, attributes: { class: "callout warning" } },
  calloutdanger: { block: "p", exact: true, attributes: { class: "callout danger" } }
};
function file_picker_callback(callback, value, meta) {
  if (meta.filetype === "file") {
    window.EntitySelectorPopup.show((entity) => {
      callback(entity.link, {
        text: entity.name,
        title: entity.name
      });
    });
  }
  if (meta.filetype === "image") {
    window.ImageManager.show(function(image) {
      callback(image.url, { alt: image.name });
    }, "gallery");
  }
}
function gatherPlugins(options2) {
  const plugins2 = [
    "image",
    "imagetools",
    "table",
    "paste",
    "link",
    "autolink",
    "fullscreen",
    "code",
    "customhr",
    "autosave",
    "lists",
    "codeeditor",
    "media",
    "imagemanager",
    "about",
    "details",
    "tasklist",
    options2.textDirection === "rtl" ? "directionality" : ""
  ];
  window.tinymce.PluginManager.add("codeeditor", getPlugin(options2));
  window.tinymce.PluginManager.add("customhr", getPlugin3(options2));
  window.tinymce.PluginManager.add("imagemanager", getPlugin4(options2));
  window.tinymce.PluginManager.add("about", getPlugin5(options2));
  window.tinymce.PluginManager.add("details", getPlugin6(options2));
  window.tinymce.PluginManager.add("tasklist", getPlugin7(options2));
  if (options2.drawioUrl) {
    window.tinymce.PluginManager.add("drawio", getPlugin2(options2));
    plugins2.push("drawio");
  }
  return plugins2.filter((plugin) => Boolean(plugin)).join(" ");
}
function fetchCustomHeadContent() {
  const headContentLines = document.head.innerHTML.split("\n");
  const startLineIndex = headContentLines.findIndex((line) => line.trim() === "<!-- Start: custom user content -->");
  const endLineIndex = headContentLines.findIndex((line) => line.trim() === "<!-- End: custom user content -->");
  if (startLineIndex === -1 || endLineIndex === -1) {
    return "";
  }
  return headContentLines.slice(startLineIndex + 1, endLineIndex).join("\n");
}
function setupBrFilter(editor) {
  editor.serializer.addNodeFilter("br", function(nodes) {
    for (const node of nodes) {
      if (node.parent && node.parent.name === "code") {
        const newline = new tinymce.html.Node.create("#text");
        newline.value = "\n";
        node.replace(newline);
      }
    }
  });
}
function getSetupCallback(options2) {
  return function(editor) {
    editor.on("ExecCommand change input NodeChange ObjectResized", editorChange);
    listen2(editor);
    register(editor);
    listenForDragAndPaste(editor, options2);
    editor.on("init", () => {
      editorChange();
      scrollToQueryString(editor);
      window.editor = editor;
    });
    editor.on("PreInit", () => {
      setupBrFilter(editor);
    });
    function editorChange() {
      const content = editor.getContent();
      if (options2.darkMode) {
        editor.contentDocument.documentElement.classList.add("dark-mode");
      }
      window.$events.emit("editor-html-change", content);
    }
    window.$events.emitPublic(options2.containerElement, "editor-tinymce::setup", { editor });
    editor.ui.registry.addButton("inlinecode", {
      tooltip: "Inline code",
      icon: "sourcecode",
      onAction() {
        editor.execCommand("mceToggleFormat", false, "code");
      }
    });
  };
}
function getContentStyle(options2) {
  return `
html, body, html.dark-mode {
    background: ${options2.darkMode ? "#222" : "#fff"};
} 
body {
    padding-left: 15px !important;
    padding-right: 15px !important; 
    height: initial !important;
    margin:0!important; 
    margin-left: auto! important;
    margin-right: auto !important;
    overflow-y: hidden !important;
}`.trim().replace("\n", "");
}
function build(options2) {
  window.tinymce.addI18n(options2.language, options2.translationMap);
  const version2 = document.querySelector('script[src*="/dist/app.js"]').getAttribute("src").split("?version=")[1];
  return {
    width: "100%",
    height: "100%",
    selector: "#html-editor",
    cache_suffix: "?version=" + version2,
    content_css: [
      window.baseUrl("/dist/styles.css")
    ],
    branding: false,
    skin: options2.darkMode ? "oxide-dark" : "oxide",
    body_class: "page-content",
    browser_spellcheck: true,
    relative_urls: false,
    language: options2.language,
    directionality: options2.textDirection,
    remove_script_host: false,
    document_base_url: window.baseUrl("/"),
    end_container_on_empty_block: true,
    remove_trailing_brs: false,
    statusbar: false,
    menubar: false,
    paste_data_images: false,
    extended_valid_elements: "pre[*],svg[*],div[drawio-diagram],details[*],summary[*],div[*],li[class|checked]",
    automatic_uploads: false,
    custom_elements: "doc-root,code-block",
    valid_children: [
      "-div[p|h1|h2|h3|h4|h5|h6|blockquote|code-block]",
      "+div[pre|img]",
      "-doc-root[doc-root|#text]",
      "-li[details]",
      "+code-block[pre]",
      "+doc-root[code-block]"
    ].join(","),
    plugins: gatherPlugins(options2),
    imagetools_toolbar: "imageoptions",
    contextmenu: false,
    toolbar: getPrimaryToolbar(options2),
    content_style: getContentStyle(options2),
    style_formats,
    style_formats_merge: false,
    media_alt_source: false,
    media_poster: false,
    formats,
    file_picker_types: "file image",
    file_picker_callback,
    paste_preprocess(plugin, args) {
      const content = args.content;
      if (content.indexOf('<img src="file://') !== -1) {
        args.content = "";
      }
    },
    init_instance_callback(editor) {
      const head = editor.getDoc().querySelector("head");
      head.innerHTML += fetchCustomHeadContent();
    },
    setup(editor) {
      registerAdditionalToolbars(editor, options2);
      getSetupCallback(options2)(editor);
    }
  };
}

// resources/js/components/wysiwyg-editor.js
var WysiwygEditor = class {
  setup() {
    this.elem = this.$el;
    this.pageId = this.$opts.pageId;
    this.textDirection = this.$opts.textDirection;
    this.isDarkMode = document.documentElement.classList.contains("dark-mode");
    this.tinyMceConfig = build({
      language: this.$opts.language,
      containerElement: this.elem,
      darkMode: this.isDarkMode,
      textDirection: this.textDirection,
      drawioUrl: this.getDrawIoUrl(),
      pageId: Number(this.pageId),
      translations: {
        imageUploadErrorText: this.$opts.imageUploadErrorText,
        serverUploadLimitText: this.$opts.serverUploadLimitText
      },
      translationMap: window.editor_translations
    });
    window.$events.emitPublic(this.elem, "editor-tinymce::pre-init", { config: this.tinyMceConfig });
    window.tinymce.init(this.tinyMceConfig);
  }
  getDrawIoUrl() {
    const drawioUrlElem = document.querySelector("[drawio-url]");
    if (drawioUrlElem) {
      return drawioUrlElem.getAttribute("drawio-url");
    }
    return "";
  }
};
var wysiwyg_editor_default = WysiwygEditor;

// resources/js/components/index.js
var componentMapping = {
  "add-remove-rows": add_remove_rows_default,
  "ajax-delete-row": ajax_delete_row_default,
  "ajax-form": ajax_form_default,
  "attachments": attachments_default,
  "attachments-list": attachments_list_default,
  "auto-suggest": auto_suggest_default,
  "back-to-top": back_to_top_default,
  "book-sort": book_sort_default,
  "chapter-toggle": chapter_toggle_default,
  "code-editor": code_editor_default,
  "code-highlighter": code_highlighter_default,
  "collapsible": collapsible_default,
  "custom-checkbox": custom_checkbox_default,
  "details-highlighter": details_highlighter_default,
  "dropdown": dropdown_default,
  "dropdown-search": dropdown_search_default,
  "dropzone": dropzone_default,
  "editor-toolbox": editor_toolbox_default,
  "entity-permissions-editor": entity_permissions_editor_default,
  "entity-search": entity_search_default,
  "entity-selector": entity_selector_default,
  "entity-selector-popup": entity_selector_popup_default,
  "event-emit-select": event_emit_select_default,
  "expand-toggle": expand_toggle_default,
  "header-mobile-toggle": header_mobile_toggle_default,
  "homepage-control": homepage_control_default,
  "image-manager": image_manager_default,
  "image-picker": image_picker_default,
  "index": components_default,
  "list-sort-control": list_sort_control_default,
  "markdown-editor": markdown_editor_default,
  "new-user-password": new_user_password_default,
  "notification": notification_default,
  "optional-input": optional_input_default,
  "page-comments": page_comments_default,
  "page-display": page_display_default,
  "page-editor": page_editor_default,
  "page-picker": page_picker_default,
  "permissions-table": permissions_table_default,
  "popup": popup_default,
  "setting-app-color-picker": setting_app_color_picker_default,
  "setting-color-picker": setting_color_picker_default,
  "shelf-sort": shelf_sort_default,
  "sidebar": sidebar_default,
  "sortable-list": sortable_list_default,
  "submit-on-change": submit_on_change_default,
  "tabs": tabs_default,
  "tag-manager": tag_manager_default,
  "template-manager": template_manager_default,
  "toggle-switch": toggle_switch_default,
  "tri-layout": tri_layout_default,
  "user-select": user_select_default,
  "webhook-events": webhook_events_default,
  "wysiwyg-editor": wysiwyg_editor_default
};
window.components = {};
function searchForComponentInParent(componentName, parentElement) {
  const elems = parentElement.querySelectorAll(`[${componentName}]`);
  for (let j = 0, jLen = elems.length; j < jLen; j++) {
    initComponent(componentName, elems[j]);
  }
}
function initComponent(name, element) {
  const componentModel = componentMapping[name];
  if (componentModel === void 0)
    return;
  let instance;
  try {
    instance = new componentModel(element);
    instance.$el = element;
    const allRefs = parseRefs(name, element);
    instance.$refs = allRefs.refs;
    instance.$manyRefs = allRefs.manyRefs;
    instance.$opts = parseOpts(name, element);
    instance.$emit = (eventName, data = {}) => {
      data.from = instance;
      const event = new CustomEvent(`${name}-${eventName}`, {
        bubbles: true,
        detail: data
      });
      instance.$el.dispatchEvent(event);
    };
    if (typeof instance.setup === "function") {
      instance.setup();
    }
  } catch (e) {
    console.error("Failed to create component", e, name, element);
  }
  if (typeof window.components[name] === "undefined") {
    window.components[name] = [];
  }
  window.components[name].push(instance);
  if (typeof element.components === "undefined") {
    element.components = {};
  }
  element.components[name] = instance;
}
function parseRefs(name, element) {
  const refs = {};
  const manyRefs = {};
  const prefix = `${name}@`;
  const selector = `[refs*="${prefix}"]`;
  const refElems = [...element.querySelectorAll(selector)];
  if (element.matches(selector)) {
    refElems.push(element);
  }
  for (const el of refElems) {
    const refNames = el.getAttribute("refs").split(" ").filter((str) => str.startsWith(prefix)).map((str) => str.replace(prefix, "")).map(kebabToCamel);
    for (const ref of refNames) {
      refs[ref] = el;
      if (typeof manyRefs[ref] === "undefined") {
        manyRefs[ref] = [];
      }
      manyRefs[ref].push(el);
    }
  }
  return { refs, manyRefs };
}
function parseOpts(name, element) {
  const opts = {};
  const prefix = `option:${name}:`;
  for (const { name: name2, value } of element.attributes) {
    if (name2.startsWith(prefix)) {
      const optName = name2.replace(prefix, "");
      opts[kebabToCamel(optName)] = value || "";
    }
  }
  return opts;
}
function kebabToCamel(kebab) {
  const ucFirst = (word) => word.slice(0, 1).toUpperCase() + word.slice(1);
  const words = kebab.split("-");
  return words[0] + words.slice(1).map(ucFirst).join("");
}
function initAll(parentElement) {
  if (typeof parentElement === "undefined")
    parentElement = document;
  for (const componentName of Object.keys(componentMapping)) {
    searchForComponentInParent(componentName, parentElement);
  }
  const componentElems = parentElement.querySelectorAll(`[component],[components]`);
  for (const el of componentElems) {
    const componentNames = `${el.getAttribute("component") || ""} ${el.getAttribute("components")}`.toLowerCase().split(" ").filter(Boolean);
    for (const name of componentNames) {
      initComponent(name, el);
    }
  }
}
window.components.init = initAll;
window.components.first = (name) => (window.components[name] || [null])[0];
var components_default = initAll;

// resources/js/app.js
window.baseUrl = function(path) {
  let basePath = document.querySelector('meta[name="base-url"]').getAttribute("content");
  if (basePath[basePath.length - 1] === "/")
    basePath = basePath.slice(0, basePath.length - 1);
  if (path[0] === "/")
    path = path.slice(1);
  return basePath + "/" + path;
};
window.importVersioned = function(moduleName) {
  const version2 = document.querySelector('link[href*="/dist/styles.css?version="]').href.split("?version=").pop();
  const importPath = window.baseUrl(`dist/${moduleName}.js?version=${version2}`);
  return import(importPath);
};
window.$http = http_default;
window.$events = events_default;
var translator = new translations_default();
window.trans = translator.get.bind(translator);
window.trans_choice = translator.getPlural.bind(translator);
window.trans_plural = translator.parsePlural.bind(translator);
components_default();
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
//# sourceMappingURL=app.js.map
