import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


const AddBucketlist = ({
    handleCloseAdd,
    openAdd,
    handleOpenAdd,
    handleChange,
    onsubmit
 }) => {
    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={handleCloseAdd}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={onsubmit}
        />,
      ];
    const style = {
        addBucket: {
          right: 20, 
          bottom: 20,
          position: 'fixed'
        }
      }
    return (
        <div>
            <FloatingActionButton 
                style={style.addBucket}
                onClick={handleOpenAdd}
                >
                <ContentAdd />
                </FloatingActionButton>
            <Dialog
                title="Add bucketlis"
                actions={actions}
                modal={false}
                open={openAdd}
                onRequestClose={handleCloseAdd}
            >
                    <TextField
                    name="name"
                    hintText="Bucket name"
                    floatingLabelText="Bucket name"
                    fullWidth={true}
                    onChange={handleChange}
                    /><br />
            </Dialog>
        </div>
    );
}

export default AddBucketlist;