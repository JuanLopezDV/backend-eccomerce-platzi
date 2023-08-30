const boom = require('@hapi/boom');
const productsDummy = require('../../productsDummy');

class ProductsService {
  constructor() {
    this.products = productsDummy;
  }

  async create(data) {
    const newProduct = {
      id: 'idd',
      ...data,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return this.products;
  }

  async findOne(id) {
    const product = this.products.find((item) => String(item.id) === id);
    if (!product) {
      throw boom.notFound('Product not found');
    } else {
      return product;
    }
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => String(item.id) === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }

    const product = this.products[index];
    this.products[index] = { ...product, ...changes };

    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => String(item.id) === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }

    this.products.splice(index, 1);

    return { id };
  }
}

module.exports = { ProductsService };
