import { useState } from "react";
import { Checkbox, Image } from "antd";
import { User } from "../../api/responseTypes";
import { Description, TabContentWrapper, Title, UserWrapper } from "./styled";

interface UserListItemProps {
  user: User;
  addToSelection: (id: number, wasSelected: boolean) => void;
}

const UserListItem = ({ user, addToSelection }: UserListItemProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const { id, first_name, last_name, email, avatar } = user;

  const handleSelection = () => {
    setIsSelected((isSelected) => !isSelected);
    addToSelection(id, isSelected);
  };

  return (
    <UserWrapper onClick={() => handleSelection()}>
      <Image
        alt={`avatar of ${first_name} ${last_name}`}
        height="7.5vh"
        width="7.5vh"
        src={avatar ?? "../../assets/default_avatar.jpg"}
        preview={false}
      />

      <TabContentWrapper>
        <Title>
          {first_name} {last_name}
        </Title>

        <Description>{email}</Description>
      </TabContentWrapper>

      <Checkbox checked={isSelected} />
    </UserWrapper>
  );
};

export default UserListItem;
