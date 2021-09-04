import React from "react";
import {AvForm,AvField} from 'availity-reactstrap-validation'
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'

function PostModal({isOpen,toggle,submit,currentItem}) {
    return(
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>
                    + Add
                </ModalHeader>
                <ModalBody>
                    <AvForm id={'form'} onSubmit={submit} model={currentItem ? currentItem : {}}>
                        <AvField type={'text'} name={'title'} label={'title'} required/>
                        <AvField type={'textarea'} name={'body'} label={'body'} required/>
                    </AvForm>
                </ModalBody>
                <ModalFooter>
                    <button className={'btn btn-success'} type={"submit"} form={'form'}>Save</button>
                    <button className={'btn btn-danger'} onClick={toggle}>Cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default PostModal