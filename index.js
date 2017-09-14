const defaultOptions = {
  width: null,
  height: null,
  margin: 8
};

class TextToImage {
  constructor(options) {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.options = Object.assign({}, defaultOptions, options);
  }

  getSelectedText() {
    if (window.getSelection) {
      return window.getSelection().toString();
    }
    if (document.selection && document.selection.type != "Control") {
      return document.selection.createRange().text;
    }
    return '';
  }

  generate(inputText = null) {
    const text = inputText ? inputText : getSelectedText();
    this.canvas.width = this.options.width ? this.options.width + this.options.margin : this.context.measureText(text).width + this.options.margin;
    this.canvas.height = parseInt(this.context.font, 10) + this.options.margin;
     context.textAlign = 'center';
    this.context.fillText(text, this.canvas.width / 2, this.canvas.height / 2);
    return this.canvas.toDataURL();
  }
}

export default TextToImage;
