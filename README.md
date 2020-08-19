# Firebase Admin を Node Express TypeScript ES2020 で試す

Firebase から Admin SDK で users 一覧を取ってくるサンプルアプリケーション

## 動作

1. Firebase / 設定 / サービスアカウント / Firebase Admin SDK / 新しい秘密鍵の生成
   で json ファイルを取得し、プロジェクト内に置く（serviceAccountKey.json など変更）
2. TypeScript で静的型付けしているのでエラー=>解消（json ファイル内の全ての情報が必要ではない）

```
  interface ServiceAccount {
    projectId?: string;
    clientEmail?: string;
    privateKey?: string;
  }
```

```

$ yarn start

# localhost:3456/secret/userinfoにアクセス
# consoleにFirebaseプロジェクト/Authenticate/Users上のuserが表示されれば実験成功
```
