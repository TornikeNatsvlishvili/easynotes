import React from 'react'
import Wrapper from './Wrapper'
import Delete from './Delete'
import uuid4 from 'uuid/v4'
import PropTypes from 'prop-types'
import Linkify from 'react-linkify'
import Tag from 'components/Tag'
import Edit from 'components/Edit'


class Note extends React.Component {
    render() {
        const { note, onDelete, onSelect, active } = this.props
        return (
            <Wrapper onClick={e => e.target !== this.deleteBtn && onSelect(note)}>
                <Edit active={active} />
                {note.tags && note.tags.map(tag =>
                    <Tag
                        key={uuid4()}
                        text={tag}
                    />
                )}
                <Linkify tagName="div" properties={{target: '_blank'}}>
                    {note.text}
                </Linkify>
                <Delete onClick={() => onDelete(note)}
                    innerRef={deleteBtn => this.deleteBtn = deleteBtn} />
            </Wrapper>
        )
    }
}
Note.propTypes = {

}

export default Note