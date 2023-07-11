import * as uuid from 'uuid';

export class ToastService {
  constructor() {
    this.toastsGroup = this.getGlobalToast() || null;
  }

  getGlobalToast() {
    return document.getElementsByTagName('uniphore-toast')?.[0];
  }
  showToast(message, timeout) {
    const toastData = { message, id: uuid.v4() };
    if (Array.isArray(this.toastsGroup?.toasts)) {
      this.toastsGroup.toasts = this.toastsGroup.toasts.concat([toastData]);
    } else {
      this.toastsGroup.toasts = [toastData];
    }

    // timeout
    setTimeout(() => {
      this.toastsGroup.toasts = this.toastsGroup.toasts.filter(
        x => x.id != toastData.id,
      );
    }, timeout || 3000);
  }
}
