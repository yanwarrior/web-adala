<template>
  <div>
    <a-row>
      <h3>Hello</h3>
      <a-col :span="8">
        Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
      </a-col>
      <a-col :span="8">
        Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
      </a-col>
      <a-col :span="8">
        <a-card title="Card Title">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>


export default {
  name: 'IndexPage',
  data(){
    return {
    }
  }
}
</script>
