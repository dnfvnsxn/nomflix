import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount(){
    try{            // 실핼
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      
      const {
        data: { results: upcoming } 
      } = await moviesApi.upcoming;

      const {
        data: { results: popular } 
      } = await moviesApi.popular;

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      })

    } catch{        // 작동하지 않으면 crror를 catch
      this.setState({
        error: "Cant't find movie information."
      });
    } finally{       // 성공,실패 여부와 상관없 이 마지막에는 무엇인가를 실행 
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state; //Object Deconstruction
    console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
