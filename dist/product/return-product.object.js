"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnProductObject = void 0;
const return_category_objects_1 = require("../category/return-category.objects");
exports.returnProductObject = {
    id: true,
    name: true,
    description: true,
    volume: true,
    unit: true,
    minportion: true,
    price: true,
    createdAt: true,
    slug: true,
    image: true,
    sort: true,
    show: true,
    recommended: true,
    category: { select: return_category_objects_1.returnCategoryObjects }
};
//# sourceMappingURL=return-product.object.js.map