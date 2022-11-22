import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../../api/responseTypes";
import Loading from "../../components/Loading";
import {
  ContentWrapper,
  EmptyWrapper,
  Header,
  MainWrapper,
  Searchbar,
} from "./styled";
import UserListItem from "../../components/UserListItem";
import { Empty } from "antd";

const Homepage = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  const addToSelection = (id: number, wasSelected: boolean) => {
    wasSelected
      ? setSelected(selected.filter((userID) => userID !== id))
      : setSelected([...selected, id]);
  };

  const compare = (a: User, b: User) => {
    if (a.last_name < b.last_name) {
      return -1;
    }
    if (a.last_name > b.last_name) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    setIsLoading(true);

    const getUsers = async () => {
      try {
        const { data } = await axios.get<User[]>(
          "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
        );
        setUsers(data.sort(compare));
        setIsLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("error message: ", error.message);
          setIsLoading(false);
          return error.message;
        } else {
          console.log("unexpected error: ", error);
          setIsLoading(false);
          return "An unexpected error occurred";
        }
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.first_name
            .toLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          user.last_name.toLowerCase().includes(searchText.toLocaleLowerCase())
      )
    );
  }, [searchText, users]);

  useEffect(() => {
    console.log("selected users IDs:", ...selected);
  }, [selected]);

  return (
    <MainWrapper>
      <ContentWrapper>
        <Header>Contacts</Header>

        <Searchbar
          size="large"
          value={searchText}
          placeholder="start typing to filter"
          onChange={(e) => setSearchText(e.target.value)}
        />

        {isLoading && <Loading />}

        {!isLoading &&
          filteredUsers.length > 0 &&
          filteredUsers.map((user) => {
            return (
              <UserListItem
                user={user}
                key={user.id}
                addToSelection={addToSelection}
              />
            );
          })}

        {!isLoading && filteredUsers.length === 0 && (
          <EmptyWrapper>
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={<span>No contacts found</span>}
            />
          </EmptyWrapper>
        )}
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Homepage;
