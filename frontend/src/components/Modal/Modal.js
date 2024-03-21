import React, { useState } from "react";
import "./Modal.css";

function Modal({ onSubmit, id, hideFooter, children, label }) {
  return (
    <div
      class="modal fade bd-example-modal-xl"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myExtraLargeModalLabel"
      aria-hidden="true"
      id={id}
    >
      <div class="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title" id="exampleModalLabel">
              {label}
            </p>
          </div>
          <div className="modal-body">{children}</div>
          {!hideFooter && (
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-light px-3"
                data-dismiss="modal"
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-sm btn-dark"
                data-dismiss="modal"
                onClick={onSubmit}
              >
                Save changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Modal;
