<template>
  <form class="needs-validation w-100" @submit="onSubmit" novalidate>
    <h2 class="text-center">Search data on ZIP code</h2>
    <div class="input-group">
      <button
          class="btn btn-primary"
          type="submit"
          :disabled="!validInput"
      >
        Submit form
      </button>
      <input
          type="text"
          class="form-control"
          :class="{'is-valid':validInput,'is-invalid':invalidInput }"
          @input="onInput"
          required
      >
      <div class="valid-feedback">
        It's ok
      </div>
      <div class="invalid-feedback">
        Something wrong
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue"

export default defineComponent({
  name: "VZipForm",
  props: {
    validationRegExp: {
      type: RegExp,
      required: true,
      default: /(^\d{5}$)|(^\d{5}-\d{4}$)/
    }
  },
  setup(props, {emit}) {

    const inputState = ref<string>();
    const validInput = ref<boolean>();
    const invalidInput = computed(() => !validInput.value && validInput.value !== undefined)

    const onSubmit = (event: Event) => {
      event.preventDefault()
      emit("onSubmit", inputState.value)
    }


    const onInput = (event: { target: HTMLInputElement }) => {
      const value: string = event.target.value;
      inputState.value = value
      validInput.value = props.validationRegExp.test(value)
    }

    return {
      onSubmit,
      onInput,
      validInput, invalidInput
    }
  }
})
</script>

<style scoped>

</style>