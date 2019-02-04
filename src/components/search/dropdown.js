import React from 'react'
import PropTypes from 'prop-types'

const SearchItem = ({title, onMouseDown}) => {
  return (
    <button
      type="button"
      onMouseDown={onMouseDown}
      class="list-group-item list-group-item-action text-truncate"
    >
      {title || 'Ritarikatu, 00170, Helsinki'}
    </button>
  )
}

SearchItem.propTypes = {
  title: PropTypes.string.isRequired,
}

const SearchList = ({isLoading, onSelect, data, ...props}) => {
  return (
    <div class="list-group search_results bg-white">
      {(isLoading && (
        <div>
          <span href="#" class="list-group-item">
            Ladataan...
          </span>
        </div>
      )) ||
        (data &&
          data.length &&
          data.map((item, i) => (
            <SearchItem
              key={`item-${i}`}
              onMouseDown={onSelect.bind(props, item)}
              title={item.title}
            />
          ))) ||
        null}
    </div>
  )
}

SearchList.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.oneOf(PropTypes.bool, PropTypes.string),
  onSelect: PropTypes.func.isRequired,
}

export default SearchList
