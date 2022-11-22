import React from "react";
import { User } from "../../api/responseTypes";
import { UserWrapper } from "./styled";

interface UserListItemProps {
  user: User;
}

const UserListItem = ({ user }: UserListItemProps) => {
  const { id, first_name, last_name, email, avatar } = user;
  return (
    <UserWrapper>
      <p>
        {first_name} {last_name}
      </p>
    </UserWrapper>
  );
};

export default UserListItem;
