import React, { Component } from 'react'
import axios from 'axios'
import XKCDCard from '../XKCDCard'
import XKCDCardPagination from '../XKCDCardPagination'
const XKCDApi = 'https://xkcd.now.sh'

class XKCDContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      src: '',
      description: '',
      num: null,
      latest: null,
      id: null,
      day: null,
      month: null,
      year: null,
      loading: false
    }

    this.handleGetComic = this.handleGetComic.bind(this)
    this.handleRandomComic = this.handleRandomComic.bind(this)
    this.handlePreviousComic = this.handlePreviousComic.bind(this)
    this.handleNextComic = this.handleNextComic.bind(this)
  }

  componentDidMount () {
    this.handleGetComic('latest')
  }

  handleGetComic (id) {
    const comicId = id === 'latest' ? '' : `/${id}`
    this.toggleLoading()
    axios
      .get(`${XKCDApi}${comicId}`)
      .then(response => {
        const data = response.data
        this.setState({
          title: data.title,
          src: data.img,
          description: data.alt,
          num: data.num,
          day: data.day,
          month: data.month,
          year: data.year
        })
        this.toggleLoading()

        if (id === 'latest') {
          this.setState({
            latest: data.num
          })
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  handleRandomComic () {
    this.handleGetComic((Math.random() * (this.state.latest - 1) + 1).toFixed())
  }

  handlePreviousComic () {
    if (this.state.num > 1) {
      this.handleGetComic(this.state.num - 1)
    } else {
      this.handleGetComic('latest')
    }
  }

  handleNextComic () {
    if (this.state.num !== this.state.latest) {
      this.handleGetComic(this.state.num + 1)
    } else {
      this.handleGetComic(1)
    }
  }

  toggleLoading () {
    this.setState({ loading: !this.state.loading })
  }

  render () {
    return (
      <div>
        <XKCDCard {...this.state} />
        <XKCDCardPagination
          next={this.handleNextComic}
          previous={this.handlePreviousComic}
          random={this.handleRandomComic}
        />
      </div>
    )
  }
}

export default XKCDContainer
