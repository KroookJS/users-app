import { UsersEntity } from "./data-access/libs/user.entity"
import { UsersVm } from "./users-vm"

type UsersAdapterVm = {
   entityToVm(entity: UsersEntity): UsersVm 
}

export const usersVmAdapter: UsersAdapterVm = {
    entityToVm({ id, name, email, username }) {
        return { id, name, email, username } 
    }
 }