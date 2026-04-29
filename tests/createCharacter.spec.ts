import { expect, test } from '@playwright/test';
import { getToken } from './client/token-client';
import { createCharacter } from './client/character-client';
import { BARBARIAN_CHAR, WIZARD_CHAR } from './data/create-character-data';

let token = '';

test.describe('Create Bruno The Barbarian', () => {
  test.beforeAll(async ({ request }) => {
    token = await getToken(request);
  });

  test('Create Barbarian Character Draft', async ({ request }) => {
    const characterReponse = await createCharacter(
      request,
      token,
      BARBARIAN_CHAR,
    );

    expect(characterReponse.id).not.toBeNull();
    expect(characterReponse.name).toBe(BARBARIAN_CHAR.name);
    expect(characterReponse.classId).toBe(BARBARIAN_CHAR.classId);
    expect(characterReponse.speciesId).toBe(BARBARIAN_CHAR.speciesId);
    expect(characterReponse.backgroundId).toBe(BARBARIAN_CHAR.backgroundId);
    expect(characterReponse.level).toBe(1);
  });

  test('Create Wizard Character Draft', async ({ request }) => {
    const characterReponse = await createCharacter(request, token, WIZARD_CHAR);

    expect(characterReponse.id).not.toBeNull();
    expect(characterReponse.name).toBe(WIZARD_CHAR.name);
    expect(characterReponse.classId).toBe(WIZARD_CHAR.classId);
    expect(characterReponse.speciesId).toBe(WIZARD_CHAR.speciesId);
    expect(characterReponse.backgroundId).toBe(WIZARD_CHAR.backgroundId);
    expect(characterReponse.level).toBe(1);
  });
});
