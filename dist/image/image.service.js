"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const nanoid_1 = require("nanoid");
const path = require("path");
const fs = require("fs");
let ImageService = class ImageService {
    addImage(file) {
        if (!file.mimetype.startsWith('image/')) {
            throw new common_1.BadRequestException('Invalid file types.');
        }
        const filename = (0, nanoid_1.nanoid)() + path.extname(file.originalname);
        const uploadPath = path.join(__dirname, '..', '..', 'images', filename);
        fs.writeFileSync(uploadPath, file.buffer);
        const imageUrl = `/images/${filename}`;
        return { path: imageUrl };
    }
};
exports.ImageService = ImageService;
exports.ImageService = ImageService = __decorate([
    (0, common_1.Injectable)()
], ImageService);
//# sourceMappingURL=image.service.js.map