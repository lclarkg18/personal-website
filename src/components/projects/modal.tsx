import React, {
  useContext,
} from 'react';
import 'bulma/css/bulma.css';
import { ModalContext } from '../../providers/context';

interface ModalProps {
  title: JSX.Element,
  content: JSX.Element,
  modalContextDefinition: string,
}

export default function Modal({ title, content, modalContextDefinition }: ModalProps): JSX.Element {
  // For some weird reason this CANNOT be a one-liner
  const context = useContext(ModalContext);
  const state = context[modalContextDefinition];

  const active = state.isActive ? 'is-active' : '';

  return (
    <div className={`modal ${active}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <section className="modal-card-body" style={{ borderRadius: 10 }}>
          <div className="level" style={{ paddingInline: '10px', paddingTop: '10px' }}>
            <h1 className="title is-2">{title}</h1>
            <button
              onClick={() => state.setIsActive(!state.isActive)}
              className="delete level-right is-align-self-flex-start"
              aria-label="close"
            />
          </div>
          <hr />
          <div>{content}</div>
        </section>
      </div>
    </div>
  );
}
