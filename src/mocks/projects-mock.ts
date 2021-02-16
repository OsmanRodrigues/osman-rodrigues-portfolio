interface Project {
  title: string
  subtitle: string
  description: string
  url: string
}

const singleProject: Project = {
  title: 'Metaliflix',
  subtitle: 'Web responsivo',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare rutrum condimentum. Quisque pellentesque nisl vel risus venenatis sagittis. Sed ut ante facilisis, imperdiet sem vel, sollicitudin mauris. Sed sed egestas orci, eget imperdiet libero. In massa tellus, congue quis ex eget, porta mollis purus. Integer vehicula augue neque, fringilla iaculis libero vehicula nec. Proin ultricies orci ligula, id venenatis orci mattis non. Nam non aliquet elit. Mauris est ante, dapibus at diam sit amet, pretium commodo nisl. Quisque aliquet, ligula quis auctor congue, leo nunc auctor mi, ac pulvinar neque metus non lectus. Aliquam eleifend ut urna nec gravida.',
  url: 'http://ocmr.metaliflix.surge.sh/'
}

export const projects: Project[] = [singleProject, singleProject, singleProject]
