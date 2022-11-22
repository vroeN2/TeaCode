import { useState } from "react";
import { Checkbox, Image } from "antd";
import { User } from "../../api/responseTypes";
import { Description, TabContentWrapper, Title, UserWrapper } from "./styled";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

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
      {avatar && (
        <Image
          alt={`avatar of ${first_name} ${last_name}`}
          height="7.5vh"
          width="7.5vh"
          src={avatar}
          preview={false}
        />
      )}

      {!avatar && <Avatar size={100} icon={<UserOutlined />} />}

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
