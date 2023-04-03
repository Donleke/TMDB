import React from "react";
import useFetchData from "../../hooks/useFetchData";
import Spinner from "../../utils/Spinner";
import { PersonCard, PageLayout } from "../../components";
import { Row, Col } from "react-bootstrap";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

export default function Person() {
  const { error, data, setPage, newData } = useFetchData("person/popular");

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore);

  function fetchMore() {
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsFetching(false);
    }, 5000);
  }

  if (!data) return <Spinner />;
  return (
    <PageLayout heading="Trending people" error={error}>
      <Row className="gy-2">
        {[...newData, ...data].map((person) => (
          <Col xs={6} md={3} xl={2} key={person.id}>
            <PersonCard {...person} />
          </Col>
        ))}
      </Row>
      {isFetching && <Spinner />}
    </PageLayout>
  );
}
