import { useUploadForm } from "../hooks";

export const UploadFileForm = () => {
    const { submitForm, updateField, submitting, setSubmitting, error, setError, linkOptions, fields, showLinkedSelection } = useUploadForm();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setSubmitting(true);
            await submitForm();
            setSubmitting(false);
        } catch (err) {
            console.error(err);
            setError('There was a problem submitting the form')
        }
    }

    const handleChange = e => {
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        updateField(e.target.name, value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name='displayName' placeholder='Filename' onChange={handleChange} value={fields.displayName} required />
                <input type="file" name='file' onChange={handleChange} required />
            </div>
            {showLinkedSelection && (
                <div>
                    <label htmlFor="attached">
                        Linked Resources
                        <select id='attached' type="text" name='linked' onChange={handleChange} value={fields.linked}>
                            {linkOptions.map((opt, i) => <option key={opt.label + i} value={opt.value}>{opt.label}</option>)}
                        </select>
                    </label>
                </div>
            )}
            <div>
                <button type='submit' disabled={submitting}>Upload</button>
                {submitting && <p>Uploading... This may take a moment.</p>}
                {error && <p>{error}</p>}
            </div>
        </form>
    )
}