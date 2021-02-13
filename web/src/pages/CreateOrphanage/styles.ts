import styled from 'styled-components';

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  height: 98%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
  }

  footer a,
  footer button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #12afcb;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer a:hover,
  footer button:hover {
    background: #17d6eb;
  }
`;

export const Main = styled.main`
  flex: 1;

  form.create-orphanage-form {
    width: 700px;
    margin: 64px auto;

    background: #ffffff;
    border: 1px solid #d3e2e5;
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;

    .input-block {
      label {
        display: flex;
        color: #8fa7b3;
        margin-top: 24px;
        margin-bottom: 8px;
        line-height: 24px;

        span {
          font-size: 14px;
          color: #8fa7b3;
          margin-left: 24px;
          line-height: 24px;
        }
      }

      input {
        height: 64px;
        padding: 0 16px;
      }

      textarea {
        min-height: 120px;
        max-height: 240px;
        resize: vertical;
        padding: 16px;
        line-height: 28px;
      }

      .new-image {
        width: 100%;
        height: 64px;
        background: #f5f8fa;
        border: 1px dashed #96d2f0;
        border-radius: 20px;
        cursor: pointer;
      }

      .button-select {
        display: grid;
        grid-template-columns: 1fr 1fr;

        button {
          height: 64px;
          background: #f5f8fa;
          border: 1px solid #d3e2e5;
          color: #5c8599;
          cursor: pointer;
        }

        button.active {
          background: #edfff6;
          border: 1px solid #a1e9c5;
          color: #37c77f;
        }

        button:first-child {
          border-radius: 20px 0px 0px 20px;
        }

        button:last-child {
          border-radius: 0 20px 20px 0;
          border-left: 0;
        }
      }
    }
    .input-block input,
    .input-block textarea {
      width: 100%;
      background: #f5f8fa;
      border: 1px solid #d3e2e5;
      border-radius: 20px;
      outline: none;
      color: #5c8599;
    }

    fieldset {
      border: 0;
      + fieldset {
        margin-top: 80px;
      }

      legend {
        width: 100%;

        font-size: 32px;
        line-height: 34px;
        color: #5c8599;
        font-weight: 700;

        border-bottom: 1px solid #d3e2e5;
        margin-bottom: 40px;
        padding-bottom: 24px;
      }
      .visitation {
        margin-bottom: 16px;
      }
    }

    button.confirm-button {
      margin-top: 64px;

      width: 100%;
      height: 64px;
      border: 0;
      cursor: pointer;
      background: #3cdc8c;
      border-radius: 20px;
      color: #ffffff;
      font-weight: 800;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background-color 0.2s;
      svg {
        margin-right: 16px;
      }
    }

    button.confirm-button:hover {
      background: #36cf82;
    }
  }
`;

export const PageCreateOrphanage = styled.div`
  #page-create-orphanage {
    display: flex;
  }
`;
