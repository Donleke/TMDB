import React from "react";
import { MediaCard, PageLayout } from "../../components";
import useFetchData from "../../hooks/useFetchData";
import Spinner from "../../utils/Spinner";
import { Col, Row } from "react-bootstrap";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

export default function Popular() {
  const { error, newData, data, setPage } = useFetchData("movie/popular");
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore);

  function fetchMore() {
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsFetching(false);
    }, 3000);
  }
  if (!data) return <Spinner />;
  return (
    <PageLayout heading="Popular" error={error}>
      <Row className="gy-2">
        {[...newData, ...data].map((movie) => (
          <Col xs={6} md={3} xl={2} key={movie.id}>
            <MediaCard {...movie} />
          </Col>
        ))}
      </Row>
      {isFetching && <Spinner />}
    </PageLayout>
  );
}
