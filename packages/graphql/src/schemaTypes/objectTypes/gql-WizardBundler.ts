import { objectType } from 'nexus'

export const WizardBundler = objectType({
  name: 'WizardBundler',
  description: 'Wizard bundler',
  node: 'name',
  definition (t) {
    t.boolean('isSelected', {
      description: 'Whether this is the selected framework bundler',
      resolve: (source, args, ctx) => ctx.wizardData.chosenBundler === source.name,
    })

    t.nonNull.string('name', {
      description: 'Display name of the bundler',
    })

    t.nonNull.string('package', {
      description: 'Package to install associated with the bundler',
    })
  },
})