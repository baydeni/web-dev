import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = ({ active = "for-you" }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="input-group px-1 me-2">
          <input
            type="text"
            className="form-control form-input rounded-pill input-group-lg"
            style={{ fontFamily: "Arial, FontAwesome" }}
            placeholder="&#xf002;   Search Twitter"
          />
        </div>
        <i
          className="fas fa-cog fa-2x"
          style={{ color: "rgb(29, 161, 242)" }}
        ></i>
      </div>

      <ul className="nav nav-tabs mb-2">
        <li className="nav-item">
          <a
            className={`nav-link ${active === "for-you" ? "active" : ""}`}
            href="for-you.html"
          >
            For You
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${active === "trending" ? "active" : ""}`}
            href="trending.html"
          >
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${active === "news" ? "active" : ""}`}
            href="news.html"
          >
            News
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${active === "sports" ? "active" : ""}`}
            href="sports.html"
          >
            Sports
          </a>
        </li>
        <li className="nav-item d-none d-md-block">
          <a
            className={`nav-link ${active === "entertainment" ? "active" : ""}`}
            href="entertainment.html"
          >
            Entertainment
          </a>
        </li>
      </ul>

      <div className="img-container position-relative">
        <img width="100%" src="../../public/tuiter/images/spacex.jpg" alt="" />
        <div className="position-absolute bottom-0 start-0 ps-2 m-0">
          <b style={{ fontSize: "35px", color: "white" }}>SpaceX's Starship</b>
        </div>
      </div>
      <PostSummaryList />
    </>
  );
};

export default ExploreComponent;
