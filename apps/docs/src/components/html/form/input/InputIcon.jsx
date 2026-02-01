export default function InputIcon() {
  return (
    <div class="field is-invalid">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="password" placeholder="Password" />
        <button class="btn input__icon">
          <iconify-icon class="icon" icon="solar:eye-outline"></iconify-icon>
        </button>
      </div>
      <span class="help">Must have more than 6 characters</span>
    </div>
  )
}
