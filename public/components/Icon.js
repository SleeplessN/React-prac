export var Icon = function Icon(_ref) {
  var type = _ref.type;
  var path = "./assets/icons/type=" + type + ".svg";
  var altText = type + "-icon";
  return React.createElement("img", {
    src: path,
    alt: altText
  });
};
//# sourceMappingURL=Icon.js.map