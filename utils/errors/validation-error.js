class ValidationError extends Error {
  constructor() {
    super();
    this.statusCode = 400;
  }
}

module.exports = ValidationError;
