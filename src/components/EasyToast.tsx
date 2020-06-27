import { Toaster, IconName, Intent, IActionProps } from '@blueprintjs/core'

const toaster = Toaster.create({ position: 'top'})

const Toast = {

  toast(message: string, timeout?: number, icon?: IconName, intent?: Intent, action?: IActionProps) {
    toaster.show({
      message,
      timeout,
      icon,
      intent,
      action,
    })
  },

  primary(message: string, timeout?: number, icon?: IconName, action?: IActionProps) {
    Toast.toast(
      message,
      timeout || 5000,
      icon || 'info-sign',
      'primary',
      action,
    )
  },

  success(message: string, timeout?: number, icon?: IconName, action?: IActionProps) {
    Toast.toast(
      message,
      timeout || 2000,
      icon || 'tick-circle',
      'success',
      action,
    )
  },

  danger(message: string, timeout?: number, icon?: IconName, action?: IActionProps) {
    Toast.toast(
      message,
      timeout || 3000,
      icon || 'error',
      'danger',
      action,
    )
  },

  warning(message: string, timeout?: number, icon?: IconName, action?: IActionProps) {
    Toast.toast(
      message,
      timeout || 5000,
      icon || 'ban-circle',
      'warning',
      action,
    )
  },
}

export default Toast