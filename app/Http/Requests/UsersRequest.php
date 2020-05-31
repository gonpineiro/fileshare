<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UsersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->request->get('id') ? ',' . $this->request->get('id') : '';

        return [
            'name' => 'required|min:3|max:20',
            'email' => 'required|email|max:100|unique:users,email'.$id,
            'type' => 'required',
            'password' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Requerido.',
            'name.min' => 'El minimo es 3 caracteres.',
            'name.max' => 'El maximo es 20 caracteres.',

            'email.required' => 'Requerido.',
            'email.unique' => 'Ya existe un correo. ',
            'email.email' => 'No corresponde el formato.',
            'email.max' => 'El maximo es 20 caracteres.',

            'type.required' => 'Requerido.',

            'password.required' => 'Requerido.'
        ];
    }
}
