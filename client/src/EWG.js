function EWG({ ewg_rating }) {
  const ewg = ewg_rating

  if (ewg === 1) {
    return <img className="ewg" src="https://www.ewg.org/skindeep/squircle/show.svg?score=1&score_min=1" alt="rating"></img>
  } else if (ewg === 2) {
    return <img className="ewg" src="https://www.ewg.org/skindeep/squircle/show.svg?score=1&score_min=2" alt="rating"></img>
  } else if (ewg === 3) {
    return <img className="ewg" src="https://www.ewg.org/skindeep/squircle/show.svg?score=3&score_min=3" alt="rating"></img>
  }
  else if (ewg === 4) {
    return <img className="ewg" src="https://www.ewg.org/skindeep/squircle/show.svg?score=3&score_min=4" alt="rating"></img>
  }
  else if (ewg === 5) {
    return <img className="ewg" src="https://www.ewg.org/skindeep/squircle/show.svg?score=3&score_min=5" alt="rating"></img>
  }
  else if (ewg === 6) {
    return <img className="ewg" src="https://www.ewg.org/skindeep/squircle/show.svg?score=3&score_min=6" alt="rating"></img>
  }
  else if (ewg === 7) {
    return <img className="ewg" src="https://www.ewg.org/skindeep/squircle/show.svg?score=3&score_min=7" alt="rating"></img>
  }
  else if (ewg === 8) {
    return <img className="ewg" src="https://www.ewg.org/skindeep/squircle/show.svg?score=3&score_min=8" alt="rating"></img>
  }
  else if (ewg === 9) {
    return <img className="ewg" src="https://www.ewg.org/skindeep/squircle/show.svg?score=3&score_min=9" alt="rating"></img>
  }
  else {
    <img className="ewg" src="https://www.ewg.org/skindeep/squircle/show.svg?score=3&score_min=10" alt="rating"></img>
  };

  return (
    <div className="ewg">
      <p>{ewg}</p>
    </div>

  )
}

export default EWG;
