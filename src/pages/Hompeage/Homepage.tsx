import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../../api/responseTypes";
import Loading from "../../components/Loading";
import { ContentWrapper, Header, MainWrapper, Searchbar } from "./styled";
import UserListItem from "../../components/UserListItem";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const getUsers = async () => {
      try {
        const { data } = await axios.get<User[]>(
          "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
        );

        console.log(data);

        setUsers(data);
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

  return (
    <MainWrapper>
      <ContentWrapper>
        <Header>Contacts</Header>

        <Searchbar size="large" />

        {isLoading && <Loading />}

        {!isLoading &&
          users.map((user) => {
            return <UserListItem user={user} key={user.id} />;
          })}
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Homepage;
