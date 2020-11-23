import React from 'react';

function Hello(props) {

    const {name, color, isSpecial} = props;

    return (
        <div style={{ color }}>
            { isSpecial && <b>*</b> }
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
  name: '정다원',
  color : 'pink'
}

export default Hello;