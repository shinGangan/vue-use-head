import { createHead } from '../../src'

describe('addHeadObjs', () => {
  test('calling them works', async () => {
    const head = createHead()
    head.addHeadObjs({
      title: 'test',
      link: [
        {
          href: '/',
        },
      ],
    })

    expect(await head.headTags()).toMatchInlineSnapshot(`
      [
        {
          "_d": "title",
          "_e": 0,
          "_p": 0,
          "children": "test",
          "props": {},
          "tag": "title",
        },
        {
          "_e": 0,
          "_p": 1,
          "props": {
            "href": "/",
          },
          "tag": "link",
        },
      ]
    `)
  })
})