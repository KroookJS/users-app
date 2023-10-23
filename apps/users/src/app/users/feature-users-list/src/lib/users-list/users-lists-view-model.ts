import { UsersVm } from "../../../../users-vm"
import { LoadingStatus } from "../../../../data-access/libs/user.loading";

export type UsersListVm = {
    users: UsersVm[];
    status: LoadingStatus;
}
