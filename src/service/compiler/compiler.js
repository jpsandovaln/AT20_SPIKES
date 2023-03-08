class javaCompiler {
    #file
    #type


 constructor(file,type) {
    this.#file = file;
      this.#type = type;
 }

        get file() {
            return this.#file;
        }
        get type() {
            return this.#type;
        }

}
