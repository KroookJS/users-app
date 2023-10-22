import { UsersEntity } from "./user.entity"
import { Phone, User } from "./users-dto.model"

type UsersDTOAdapter = {
    DTOtoEntity(dto: User): UsersEntity,
    entityToDTO(entity: UsersEntity): User
}

export const usersDTOAdapter: UsersDTOAdapter = {
    DTOtoEntity(dto) {
      const { phone, ...otherAddressFields } = dto
  
      return {
        ...otherAddressFields,
        isPhone: phone === Phone.Admin ? true : false,
      }
    },

    entityToDTO(entity) {
      const { isPhone, ...otherFields } = entity;
  
      return {
        ...otherFields,
        phone: isPhone ? Phone.Admin : Phone.User,
      };
    }
  }