import { MyPage } from '../../mocks/mocks'

test('It should be ok', () => {
  const Home = new MyPage()

  Home.children = 'body'

  expect(Home.children).toEqual('body')
})
