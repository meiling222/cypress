import type { ClientTestContext } from '../context/ClientTestContext'
import type { ProjectBaseContract } from '../contracts/ProjectBaseContract'
import { BaseActions } from './BaseActions'

export class ClientTestActions extends BaseActions {
  constructor (protected ctx: ClientTestContext) {
    super(ctx)
  }

  async installDependencies () {
    return
  }

  async initializePlugins () {
    return
  }

  createProjectBase (): ProjectBaseContract {
    return {
      isOpen: false,
      async initializePlugins () {
        return
      },
    }
  }
}