"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
exports.UserRepository = dataSource.getRepository(User).extend({
    findByName(firstName, lastName) {
        return this.createQueryBuilder("user")
            .where("user.firstName = :firstName", { firstName })
            .andWhere("user.lastName = :lastName", { lastName })
            .getMany();
    },
});
//# sourceMappingURL=UserRepository.js.map