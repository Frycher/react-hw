import React, { useContext, useRef } from 'react';
import { actionTypes } from '../store/actionTypes';
import { MyContext } from '../store/context';
import Input from './Input';
import Button from './Button';

const Step2 = (props) => {
  const { state, dispatch } = useContext(MyContext);
  const { currentStep, avatar } = state;
  const { NEXT_STEP, PREVIOUS_STEP, SET_DATA_VALUE } = actionTypes;
  const inputRef = useRef(null);

  const handleSetAvatar = (e) => {
    const target = e.target.src;
    dispatch({ type: SET_DATA_VALUE, payload: { avatar: target } });
  };

  const handleUploadAvatar = () => {
    // inputRef.current.click();
    const currentFile = inputRef.current.files[0];
    const reader = new FileReader();
    if(currentFile) {
      reader.readAsDataURL(currentFile);
    }
    reader.addEventListener('load', (e) => {
      dispatch({ type: SET_DATA_VALUE, payload: { avatar: reader.result } });
    });
  };
  return (
    <>
      <h2 className="title">ШАГ: {currentStep}</h2>
      <div className="form__group upload">
        <label htmlFor="upload">Upload</label>
        <Input type="file" ref={inputRef} onChange={handleUploadAvatar} id="upload" />
      </div>
      {avatar && (
        <div className="selected__ava">
          <img src={avatar} alt="" />
        </div>
      )}

      <div className="avatars" onClick={handleSetAvatar}>
        <div className="item">
          <img src="/avatar/1.jpg" alt="1" />
        </div>
        <div className="item">
          <img src="/avatar/2.png" alt="2" />
        </div>
        <div className="item">
          <img src="/avatar/3.png" alt="4" />
        </div>
        <div className="item">
          <img src="/avatar/4.jpg" alt="4" />
        </div>
      </div>
      <div className="button__wrapp">
        <Button onClick={() => dispatch({ type: PREVIOUS_STEP })}>Previous</Button>
        <Button onClick={() => dispatch({ type: NEXT_STEP })}>Next</Button>
      </div>
    </>
  );
};

export default Step2;
