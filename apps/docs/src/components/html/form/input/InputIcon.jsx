export default function InputIcon() {
  return (
    <div className="is-flex is-flex-column is-gap-3">
      <div class="field">
        <label class="label">Search</label>
        <div class="control">
          <iconify-icon
            class="icon input__icon"
            icon="solar:magnifer-outline"
          ></iconify-icon>
          <input class="input" type="text" placeholder="Search..." />
        </div>
      </div>
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
    </div>
  )
}
