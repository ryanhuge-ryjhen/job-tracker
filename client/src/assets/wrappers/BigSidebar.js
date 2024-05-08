import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px, 0, 0, 0 rgba(0, 0, 0, 0.1);

    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .show-sidebar {
      margin-left: 0;
    }
    .context {
      position: sticky;
      top: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav-links {
      padding-top: 2rem;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .nav-link {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      text-transform: capitalize;
      transition: 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 0.5rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
  }
`;
export default Wrapper;
